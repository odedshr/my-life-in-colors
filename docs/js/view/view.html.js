import { jsx as _jsx, jsxs as _jsxs } from "nano-jsx/esm/jsx-runtime";
import { render } from 'nano-jsx';
import { Element as MonthView } from './month.html.js';
function getAttributes(palette, current) {
    const attributes = { value: palette.id };
    if (palette.id === current.id) {
        attributes.selected = "selected";
    }
    return attributes;
}
const Element = (props) => {
    const currentPalette = props.palettes.current;
    const onChange = (evt) => evt.target && props.onSelectPalette(evt.target.value);
    return (_jsxs("main", { class: "page view", children: [_jsxs("header", { children: [_jsx("h2", { class: "palette-name", children: _jsx("select", { id: "select-palette", onChange: onChange, children: props.palettes.items.map(palette => (_jsx("option", Object.assign({}, getAttributes(palette, currentPalette), { children: palette.name })))) }) }), _jsx("ul", { class: "palette-colors", children: currentPalette.colors.map(color => (_jsx("li", { class: "color", style: `--color: ${color.hex}`, children: color.name }))) })] }), _jsx("article", { class: "timeline", children: props.months.map((month, i) => MonthView({ month })) }), _jsxs("footer", { children: [_jsx("button", { children: "Add Status" }), " | ", _jsx("a", { href: "palettes.html", children: "Edit Palettes" })] })] }));
};
function appendChild(parent, props) {
    render(_jsx(Element, { onSelectPalette: props.onSelectPalette, palettes: props.palettes, months: props.months }), parent);
}
export { appendChild };
