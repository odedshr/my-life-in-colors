var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { appendChild } from './view.html.js';
import { addToDate, getFirstDayOfWeek, isFirstDateBeforeSecondDate } from '../utils/date-utils.js';
import { getPalettes } from '../db.js';
function onAddEntryButtonClicked() {
    return __awaiter(this, void 0, void 0, function* () {
        return true;
    });
}
function pickAtRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}
function switchPage() {
    document.title = 'My Life in Colors';
    const palettes = getPalettes();
    const palette = pickAtRandom(palettes);
    // const palette = {
    //   name: 'List Number 1',
    //   colors: [
    //     { name: 'Status 1', hex: '#22BA28' },
    //     { name: 'Status 2', hex: '#EEDA23' },
    //     { name: 'Status 3', hex: '#BA227D' },
    //   ]
    // };
    const months = [];
    for (let i = 0; i < 12; i++) {
        const firstDay = new Date(2024, i, 1);
        const nextMonth = new Date(2024, i + 1, 1);
        const month = { firstDay, weeks: [] };
        let date = getFirstDayOfWeek(firstDay);
        while (isFirstDateBeforeSecondDate(date, nextMonth)) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                week.push({ date, colorValue: pickAtRandom(palette.colors).hex });
                date = addToDate(date, 1);
            }
            month.weeks.push(week);
        }
        months.push(month);
    }
    appendChild(document.body, { onAddEntryButtonClicked, palette, months });
}
export { switchPage };
