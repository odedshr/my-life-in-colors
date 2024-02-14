import { appendChild } from './palettes.html.js';
import { Palette } from '../types.js';
import { getPalettes } from '../db.js';
import { redirectTo } from '../init.js';

function switchPage() {
  const palettes: Palette[] = getPalettes();

  if (palettes.length === 0) {
    redirectTo('/palettes/add');
  }

  const onAddItemRequested: () => void = () => redirectTo('/palettes/add');

  appendChild(document.body, { onAddItemRequested, palettes });
}

export { switchPage };