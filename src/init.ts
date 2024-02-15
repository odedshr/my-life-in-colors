import { getFormattedDate, isDateStringValid } from "./utils/date-utils.js";

import { switchPage as switchToPageNotFound } from "./404/404.controller.js";
import { switchPage as switchToViewPage } from "./view/view.controller.js";
import { switchPage as switchToPalettesPage } from "./palettes/palettes.controller.js";
import { switchPage as switchToEditPalettePage } from "./palettes/edit-palette.controller.js";

const ROOT_PATH = '/my-life-in-colors';
async function init(url: string, parameters: URLSearchParams = new URLSearchParams()): Promise<void> {
  url = url.replace(ROOT_PATH, '');


  if (url.match(/\/palettes\.html\/?/)) {
    const index = parameters.get('i');
    if (index) {
      return await switchToEditPalettePage(isNaN(+index) ? -1 : +index);
    }

    return await switchToPalettesPage();
  }

  if (url.match(/\/timeline\/?/)) {
    console.log("timeline");
    //return await switchToDiariesPage(user);
  }

  let day = parameters.get('day') || '';

  if (url === '/' || url === '/index.html') {
    url = '/index.html';
  }

  if (['/index.html'].indexOf(url) >= 0 && !isDateStringValid(day)) {
    parameters.set('day', getFormattedDate(new Date()));
    return await redirectTo(url, parameters);
  }

  if (url === '/index.html') {
    return await switchToViewPage();
  }

  console.error('Unknown url:', url, parameters.toString())
  return await switchToPageNotFound();
}

async function redirectTo(url: string, parameters: URLSearchParams = new URLSearchParams()): Promise<void> {
  history.pushState({}, '', `${ROOT_PATH}${url}?${parameters.toString()}`);
  return init(url, parameters);
}


window.addEventListener('load', () => init(location.pathname, new URLSearchParams(location.search)))
export { init, redirectTo };