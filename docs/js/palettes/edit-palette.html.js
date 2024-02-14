import { jsx as _jsx, jsxs as _jsxs } from "nano-jsx/esm/jsx-runtime";
import { render } from 'nano-jsx';
function refreshList(listElement, items) {
    while (listElement.children.length) {
        listElement.removeChild(listElement.children[0]);
    }
    render(items.map(getColorElement), listElement);
}
function setName(palette, evt) {
    palette.name = evt.target.value;
}
function setDescription(palette, evt) {
    palette.description = evt.target.value;
}
function setColorHex(color, evt) {
    color.hex = evt.target.value;
}
function setColorName(color, evt) {
    color.name = evt.target.value;
}
function getColorElement(color, i) {
    return _jsxs("li", { class: "color-item", children: [_jsx("input", { onChange: setColorHex.bind(null, color), type: "color", name: `hex-${i}`, value: color.hex }), _jsx("input", { onChange: setColorName.bind(null, color), type: "text", name: `name-${i}`, value: color.name, required: "required" })] });
}
;
const Element = (props) => {
    let colorList;
    const addColor = (evt) => {
        props.palette.colors.push({ name: '', hex: '#000000' });
        refreshList(colorList, props.palette.colors);
        evt.preventDefault();
        return false;
    };
    const onSubmit = (evt) => {
        console.log(props.palette);
        props.onSubmitted(props.palette);
        evt.preventDefault();
        return false;
    };
    const isNew = props.palette.name.length === 0;
    return (_jsxs("form", { class: "page palette-edit", onSubmit: onSubmit, children: [_jsx("header", { children: _jsxs("h1", { class: "page-name", children: [isNew ? 'Add new' : 'Edit', " palette"] }) }), _jsxs("article", { children: [_jsxs("div", { class: "field", children: [_jsx("input", { onChange: setName.bind(null, props.palette), type: "text", id: "name", name: "name", required: "required", placeholder: "Palette name", value: props.palette.name }), _jsx("label", { for: "name", children: "Palette name" })] }), _jsxs("div", { class: "field", children: [_jsx("input", { onChange: setDescription.bind(null, props.palette), type: "text", id: "description", name: "description", placeholder: "Description", value: props.palette.description }), _jsx("label", { for: "description", children: "Description" })] }), _jsx("h2", { children: "Colors" }), _jsx("ul", { class: "color-list", ref: (el) => colorList = el, children: props.palette.colors.map(getColorElement) }), _jsx("button", { onClick: addColor, children: "Add color" })] }), _jsxs("footer", { children: [_jsxs("button", { children: [isNew ? 'Add' : 'Save', " Palette"] }), _jsx("button", { onClick: props.onCancel, children: "Cancel" })] })] }));
};
function appendChild(parent, props) {
    render(_jsx(Element, { palette: props.palette, onSubmitted: props.onSubmitted, onCancel: props.onCancel }), parent);
}
export { appendChild };
