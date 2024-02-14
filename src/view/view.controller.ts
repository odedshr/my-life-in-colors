import { appendChild } from './view.html.js';
import { Day, Color } from '../types.js';
import { addToDate, getFirstDayOfWeek, isFirstDateBeforeSecondDate } from '../utils/date-utils.js';
import { getPalettes } from '../db.js';

async function onAddEntryButtonClicked(): Promise<boolean> {
  return true;
}

function pickAtRandom(list: any[]) {
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
    const month = { firstDay, weeks: [] as Day[][] };
    let date = getFirstDayOfWeek(firstDay);

    while (isFirstDateBeforeSecondDate(date, nextMonth)) {
      const week: Day[] = [];
      for (let j = 0; j < 7; j++) {
        week.push({ date, colorValue: pickAtRandom(palette.colors).hex })
        date = addToDate(date, 1);
      }
      month.weeks.push(week);
    }
    months.push(month);
  }

  appendChild(document.body, { onAddEntryButtonClicked, palette, months });
}

export { switchPage };