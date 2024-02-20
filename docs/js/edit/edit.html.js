import { jsx as _jsx, jsxs as _jsxs } from "nano-jsx/esm/jsx-runtime";
import { render } from 'nano-jsx';
const Element = (props) => {
    let dirtyValues = Object.assign({}, props.day.palette);
    console.log(props.day);
    const onSubmit = (evt) => {
        const newDay = Object.assign({}, props.day);
        newDay.palette = Object.assign(Object.assign({}, props.day.palette), dirtyValues);
        props.onSubmitted(newDay);
        evt.preventDefault();
        return false;
    };
    return (_jsxs("form", { class: "page day-edit", onSubmit: onSubmit, children: [_jsx("header", { children: _jsx("h2", { class: "palette-name", children: "day" }) }), _jsx("article", { class: "values", children: _jsx("ul", { class: "palettes", children: props.palettes.map(palette => {
                        const selectedValue = props.day.palette[palette.id] || palette.colors[0].name;
                        return (_jsxs("li", { children: [_jsx("h3", { children: palette.name }), _jsx("ul", { class: "colors", children: palette.colors.map((color, i) => {
                                        const checked = (color.name === selectedValue) ? { checked: "checked" } : {};
                                        const attributes = {
                                            id: `${palette.id}-${i}`,
                                            name: palette.id,
                                            style: `--color: ${color.hex}`,
                                            value: color.name,
                                            onChange: () => { dirtyValues[palette.id] = color.name; }
                                        };
                                        return (_jsxs("li", { children: [_jsx("input", Object.assign({ type: "radio" }, attributes, checked)), _jsx("label", { for: `${palette.id}-${i}`, children: color.name })] }));
                                    }) })] }));
                    }) }) }), _jsxs("footer", { children: [_jsx("button", { children: "Save" }), _jsx("button", { onClick: props.onCancel, children: "Cancel" })] })] }));
};
function appendChild(parent, props) {
    render(_jsx(Element, { onSubmitted: props.onSubmitted, onCancel: props.onCancel, palettes: props.palettes, day: props.day }), parent);
}
export { appendChild };
