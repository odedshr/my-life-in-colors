import { appendChild } from './palettes.html.js';
import { getPalettes } from '../db.js';
import { redirectTo } from '../init.js';
function switchPage() {
    const palettes = getPalettes();
    if (palettes.length === 0) {
        redirectTo(`${location.pathname}?i=add`);
    }
    const onAddItemRequested = () => redirectTo(`${location.pathname}?i=add`);
    appendChild(document.body, { onAddItemRequested, palettes });
}
export { switchPage };
