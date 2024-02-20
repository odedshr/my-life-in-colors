import { jsx as _jsx, jsxs as _jsxs } from "nano-jsx/esm/jsx-runtime";
import { getFormattedDate, isFirstDateBeforeSecondDate } from '../utils/date-utils.js';
function getWeekdayNameLetter(date) {
    return date.toLocaleDateString('default', { weekday: 'short' })[0];
}
const today = new Date();
function getAttributes(day) {
    return {
        class: `data-item${isFirstDateBeforeSecondDate(today, day.date) ? ' data-item-future' : ''}`,
        style: `--circle-color: ${day.hex};`,
        datetime: day.date.toISOString()
    };
}
const Element = (props) => {
    const firstDate = props.month.firstDay;
    const monthValue = firstDate.getMonth();
    const monthName = `${firstDate.toLocaleDateString('default', { month: 'long' })} ${firstDate.getFullYear()}`;
    return (_jsxs("section", { class: "month", children: [_jsx("h3", { class: "month-name", children: monthName }), _jsxs("table", { children: [_jsx("thead", { children: _jsx("tr", { children: props.month.weeks[0].map(day => (_jsx("th", { class: "weekday-name", children: getWeekdayNameLetter(day.date) }))) }) }), _jsx("tbody", { children: props.month.weeks.map((week, i) => (_jsx("tr", { children: week.map(day => (_jsx("td", { children: day.date.getMonth() === monthValue ? (_jsx("a", { href: `?day=${getFormattedDate(day.date)}`, children: _jsx("time", Object.assign({}, getAttributes(day), { children: "\u00A0" })) })) : '' }))) }))) })] })] }));
};
export { Element };
