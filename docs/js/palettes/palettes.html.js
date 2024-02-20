import { jsx as _jsx, jsxs as _jsxs } from "nano-jsx/esm/jsx-runtime";
import { render } from 'nano-jsx';
const Element = (props) => (_jsxs("form", { class: "page palettes", children: [_jsx("header", { children: _jsx("h1", { class: "app-name", children: "Palettes" }) }), _jsx("article", { children: _jsx("ul", { class: "palette-list", children: props.palettes.map((palette, i) => (_jsxs("li", { class: "palette-item", children: [_jsx("a", { href: `${location.pathname}?i=${i}`, class: "palette-link", children: palette.name }), _jsx("ul", { class: "colors", children: palette.colors.map(color => _jsx("li", { class: "color", style: `--color: ${color.hex}`, title: color.name, children: "\u00A0" })) })] }))) }) }), _jsxs("footer", { children: [_jsx("a", { href: "index.html", children: "Back" }), " | ", _jsx("button", { onClick: props.onAddItemRequested, children: "Add Palette" })] })] }));
function appendChild(parent, props) {
    render(_jsx(Element, { palettes: props.palettes, onAddItemRequested: props.onAddItemRequested }), parent);
}
export { appendChild };
