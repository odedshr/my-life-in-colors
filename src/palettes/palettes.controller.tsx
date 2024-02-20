import { appendChild } from './palettes.html.js';
import { Palette } from '../types.js';
import { getPalettes } from '../db.js';
import { redirectTo } from '../init.js';

function switchPage() {
  const palettes: Palette[] = getPalettes().items;

  if (palettes.length === 0) {
    redirectTo(`${location.pathname}?i=add`);
  }

  const onAddItemRequested: () => void = () => redirectTo(`${location.pathname}?i=add`);

  appendChild(document.body, { onAddItemRequested, palettes: palettes });
}

export { switchPage };