import { appendChild } from './edit.html.js';
import { getDays, getPalettes, setDays } from '../db.js';
import { redirectTo } from '../init.js';
function switchPage(dayKey) {
    document.title = 'My Life in Colors';
    const palettes = getPalettes().items;
    const days = getDays();
    const day = days[dayKey] || { date: new Date(), palette: {} };
    const onSubmitted = (day) => {
        setDays(Object.assign(Object.assign({}, days), { [dayKey]: day }));
        redirectTo('/');
    };
    const onCancel = () => redirectTo('/');
    appendChild(document.body, { onSubmitted, onCancel, palettes, day });
}
export { switchPage };
