import { render } from 'nano-jsx';
import { ElementType, Palette, Color } from '../types.js';

type Props = {
  onSubmitted: (palette: Palette) => void;
  onCancel: () => void;
  palette: Palette
}

function refreshList(listElement: HTMLUListElement, items: Color[]) {
  while (listElement.children.length) { listElement.removeChild(listElement.children[0]); }
  render(items.map(getColorElement), listElement);
}

function setName(palette: Palette, evt: Event) {
  palette.name = (evt.target as HTMLInputElement).value;
}
function setDescription(palette: Palette, evt: Event) {
  palette.description = (evt.target as HTMLInputElement).value;
}

function setColorHex(color: Color, evt: Event) {
  color.hex = (evt.target as HTMLInputElement).value;
}

function setColorName(color: Color, evt: Event) {
  color.name = (evt.target as HTMLInputElement).value;
}

function getColorElement(color: Color, i: number) {
  return <li class="color-item">
    <input onChange={setColorHex.bind(null, color)} type="color" {...{ name: `hex-${i}`, value: color.hex }} />
    <input onChange={setColorName.bind(null, color)} type="text" {...{ name: `name-${i}`, value: color.name }} required="required" />
  </li>
};

const Element: ElementType<Props> = (props) => {
  let colorList: HTMLUListElement;

  const addColor = (evt: Event) => {
    props.palette.colors.push({ name: '', hex: '#000000' });
    refreshList(colorList, props.palette.colors);
    evt.preventDefault();
    return false;
  };

  const onSubmit = (evt: Event) => {
    props.onSubmitted(props.palette);
    evt.preventDefault();
    return false;
  }

  const isNew = props.palette.name.length === 0;

  return (<form class="page palette-edit" onSubmit={onSubmit}>
    <header>
      <h1 class="page-name">{isNew ? 'Add new' : 'Edit'} palette</h1>
    </header>
    <article>
      <div class="field">
        <input
          onChange={setName.bind(null, props.palette)}
          type="text"
          id="name"
          name="name"
          required="required"
          placeholder="Palette name"
          {...{ value: props.palette.name }} />
        <label for="name">Palette name</label>
      </div>
      <div class="field">
        <input
          onChange={setDescription.bind(null, props.palette)}
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          {...{ value: props.palette.description }} />
        <label for="description">Description</label>
      </div>

      <h2>Colors</h2>
      <ul class="color-list" ref={(el: HTMLUListElement) => colorList = el}>
        {props.palette.colors.map(getColorElement)}
      </ul>
      <button onClick={addColor}>Add color</button>
    </article>
    <footer>
      <button>{isNew ? 'Add' : 'Save'} Palette</button>
      <button onClick={props.onCancel}>Cancel</button>
    </footer>
  </form>)
};

function appendChild(parent: HTMLElement, props: Props) {
  render(<Element
    palette={props.palette}
    onSubmitted={props.onSubmitted}
    onCancel={props.onCancel}
  />, parent);
}

export { appendChild };