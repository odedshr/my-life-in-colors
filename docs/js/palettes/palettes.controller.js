import { appendChild } from './palettes.html.js';
import { getPalettes } from '../db.js';
import { redirectTo } from '../init.js';
function switchPage() {
    const palettes = getPalettes();
    if (palettes.length === 0) {
        redirectTo('/palettes/add');
    }
    const onAddItemRequested = () => redirectTo('/palettes/add');
    appendChild(document.body, { onAddItemRequested, palettes });
}
export { switchPage };
