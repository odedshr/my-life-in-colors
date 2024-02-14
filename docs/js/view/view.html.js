import { jsx as _jsx, jsxs as _jsxs } from "nano-jsx/esm/jsx-runtime";
import { render } from 'nano-jsx';
import { Element as MonthView } from './month.html.js';
const Element = (props) => {
    let addEntryButton;
    return (_jsxs("main", { class: "page view", children: [_jsxs("header", { children: [_jsx("h2", { class: "palette-name", children: props.palette.name }), _jsx("ul", { class: "palette-colors", children: props.palette.colors.map(color => (_jsx("li", { class: "color", style: `--color: ${color.hex}`, children: color.name }))) })] }), _jsx("article", { class: "timeline", children: props.months.map((month, i) => MonthView({ month })) }), _jsx("footer", { children: _jsx("button", { children: "Add Status" }) })] }));
};
function appendChild(parent, props) {
    render(_jsx(Element, { onAddEntryButtonClicked: props.onAddEntryButtonClicked, palette: props.palette, months: props.months }), parent);
}
export { appendChild };
