import { appendChild } from './edit-palette.html.js';
import { Palette, Color } from '../types.js';
import { getPalettes, setPalettes } from '../db.js';
import { redirectTo } from '../init.js';
import { generateUUID } from '../utils/utils.js';

function getPalette(palettes: Palette[], paletteIndex: number): Palette {
  const palette = (paletteIndex < palettes.length) ?
    palettes[paletteIndex] :
    { id: generateUUID(), name: '', description: '', colors: [{ name: 'No', hex: '#ffffff' }, { name: 'Yes', hex: '#000000' }] as Color[] };

  return palette;
}
function switchPage(paletteIndex: number) {
  const palettes = getPalettes().items;
  if (paletteIndex < 0 || paletteIndex > palettes.length) {
    paletteIndex = palettes.length;
  }
  const palette: Palette = getPalette(palettes, paletteIndex);
  const onSubmitted = (palette: Palette) => {
    setPalettes([...palettes.slice(0, paletteIndex), palette, ...palettes.slice(paletteIndex + 1)]);
    redirectTo('/palettes.html');
  };
  const onCancel = () => redirectTo('/palettes.html');

  appendChild(document.body, { onSubmitted, onCancel, palette });
}

export { switchPage };