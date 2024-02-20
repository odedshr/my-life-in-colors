import { Month } from '../types.js';
import { getFormattedDate, isFirstDateBeforeSecondDate } from '../utils/date-utils.js';

type ElementType = (props: {
  month: Month
}) => HTMLElement;

function getWeekdayNameLetter(date: Date) {
  return date.toLocaleDateString('default', { weekday: 'short' })[0];
}

const today = new Date();

function getAttributes(day: { date: Date, hex: string }) {
  return {
    class: `data-item${isFirstDateBeforeSecondDate(today, day.date) ? ' data-item-future' : ''}`,
    style: `--circle-color: ${day.hex};`,
    datetime: day.date.toISOString()
  };
}

const Element: ElementType = (props) => {

  const firstDate = props.month.firstDay;
  const monthValue = firstDate.getMonth();
  const monthName = `${firstDate.toLocaleDateString('default', { month: 'long' })} ${firstDate.getFullYear()}`;

  return (
    <section class="month">
      <h3 class="month-name">{monthName}</h3>
      <table>
        <thead>
          <tr>
            {props.month.weeks[0].map(day => (<th class="weekday-name">{getWeekdayNameLetter(day.date)}</th>))}
          </tr>
        </thead>
        <tbody>
          {props.month.weeks.map((week, i) => (
            <tr>
              {week.map(day => (<td>{day.date.getMonth() === monthValue ? (
                <a {...{ href: `?day=${getFormattedDate(day.date)}` }}>
                  <time {...getAttributes(day)}>&nbsp;</time>
                </a>) : ''}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>);
}

export { Element };