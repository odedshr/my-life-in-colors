import { render } from 'nano-jsx';
import { ElementType, Palette } from '../types.js';

type Props = {
  onAddItemRequested: () => void;
  palettes: Palette[]
}

const Element: ElementType<Props> = (props) => {
  let addItemButton: HTMLButtonElement;

  return (<main class="page palettes">
    <header>
      <h1 class="app-name">My Life In Color</h1>
    </header>
    <article>
      <ul class="palette-list">
        {props.palettes.map((palette, i) => (
          <li class="palette-item">
            <a {...{ href: `${location.pathname}?i=${i}` }} class="palette-link">{palette.name}</a>
            <ul class="colors">
              {palette.colors.map(color => <li class="color" {...{ style: `--color: ${color.hex}`, title: color.name }}>&nbsp;</li>)}
            </ul>
          </li>))}
      </ul>
    </article>
    <footer>
      <button onClick={props.onAddItemRequested}>Add Palette</button>
    </footer>
  </main>)
};

function appendChild(parent: HTMLElement, props: Props) {
  render(<Element
    palettes={props.palettes}
    onAddItemRequested={props.onAddItemRequested}
  />, parent);
}

export { appendChild };