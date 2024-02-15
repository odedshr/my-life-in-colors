import { appendChild } from './edit-palette.html.js';
import { getPalettes, setPalettes } from '../db.js';
import { redirectTo } from '../init.js';
function getPalette(palettes, paletteIndex) {
    const palette = (paletteIndex < palettes.length) ?
        palettes[paletteIndex] :
        { name: '', description: '', colors: [{ name: 'No', hex: '#ffffff' }, { name: 'Yes', hex: '#000000' }] };
    return palette;
}
function switchPage(paletteIndex) {
    const palettes = getPalettes();
    if (paletteIndex < 0 || paletteIndex > palettes.length) {
        paletteIndex = palettes.length;
    }
    const palette = getPalette(palettes, paletteIndex);
    const onSubmitted = (palette) => {
        setPalettes([...palettes.slice(0, paletteIndex), palette, ...palettes.slice(paletteIndex + 1)]);
        redirectTo('/palettes.html');
    };
    const onCancel = () => redirectTo('/palettes.html');
    appendChild(document.body, { onSubmitted, onCancel, palette });
}
export { switchPage };
