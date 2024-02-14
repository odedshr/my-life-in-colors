var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getFormattedDate, isDateStringValid } from "./utils/date-utils.js";
import { switchPage as switchToPageNotFound } from "./404/404.controller.js";
import { switchPage as switchToViewPage } from "./view/view.controller.js";
import { switchPage as switchToPalettesPage } from "./palettes/palettes.controller.js";
import { switchPage as switchToEditPalettePage } from "./palettes/edit-palette.controller.js";
const ROOT_PATH = '/my-life-in-colors';
function init(url, parameters = new URLSearchParams()) {
    return __awaiter(this, void 0, void 0, function* () {
        url = url.replace(ROOT_PATH, '');
        if (url.match(/\/palettes\/add\/?/)) {
            return yield switchToEditPalettePage(-1);
        }
        if (url.match(/\/palettes\/?/)) {
            const index = parameters.get('i');
            if (index) {
                return yield switchToEditPalettePage(+index);
            }
            return yield switchToPalettesPage();
        }
        if (url.match(/\/timeline\/?/)) {
            console.log("timeline");
            //return await switchToDiariesPage(user);
        }
        let day = parameters.get('day') || '';
        if (url === '/' || url === '/index.html') {
            url = '/view/';
        }
        if (['/view/'].indexOf(url) >= 0 && !isDateStringValid(day)) {
            parameters.set('day', getFormattedDate(new Date()));
            return yield redirectTo(url, parameters);
        }
        if (url === '/' || url === '/view/') {
            return yield switchToViewPage();
        }
        console.error('Unknown url:', url, parameters.toString());
        return yield switchToPageNotFound();
    });
}
function redirectTo(url, parameters = new URLSearchParams()) {
    return __awaiter(this, void 0, void 0, function* () {
        history.pushState({}, '', `${ROOT_PATH}${url}?${parameters.toString()}`);
        return init(url, parameters);
    });
}
window.addEventListener('load', () => init(location.pathname, new URLSearchParams(location.search)));
export { init, redirectTo };
