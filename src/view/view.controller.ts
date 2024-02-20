import { appendChild } from './view.html.js';
import { Palettes, Palette, Month } from '../types.js';
import { addToDate, getFormattedDate, getFirstDayOfWeek, isFirstDateBeforeSecondDate } from '../utils/date-utils.js';
import { getDays, getPalettes, setCurrentPaletteId } from '../db.js';

function getPaletteColors(palette: Palette) {
  return palette.colors.reduce(
    (acc, color) => { acc[color.name] = color.hex; return acc },
    {} as { [key: string]: string }
  );
}

function onSelectPalette(parent: HTMLElement, palettes: Palettes, paletteId: string) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
  setCurrentPaletteId(paletteId);
  palettes.current = palettes.map[paletteId];
  refreshPage(parent, palettes);
}

function getMonths(palette: Palette) {
  const colors = getPaletteColors(palette);
  const defaultColor = palette.colors[0];
  const days = getDays();

  const months = [];
  for (let i = 0; i < 12; i++) {
    const firstDay = new Date(2024, i, 1);
    const nextMonth = new Date(2024, i + 1, 1);
    const month: Month = { firstDay, weeks: [] };
    let date = getFirstDayOfWeek(firstDay);

    while (isFirstDateBeforeSecondDate(date, nextMonth)) {
      const week: { date: Date, hex: string }[] = [];
      for (let j = 0; j < 7; j++) {
        const key = getFormattedDate(date);
        week.push({ date, hex: days[key] ? colors[days[key].palette[palette.id]] : defaultColor.hex })
        date = addToDate(date, 1);
      }
      month.weeks.push(week);
    }
    months.push(month);
  }
  return months
}

function refreshPage(parent: HTMLElement, palettes: Palettes) {
  const months = getMonths(palettes.current);

  appendChild(parent, { onSelectPalette: (paletteId: string) => onSelectPalette(parent, palettes, paletteId), palettes, months });
}

function switchPage() {
  document.title = 'My Life in Colors';

  refreshPage(document.body, getPalettes());
}

export { switchPage };