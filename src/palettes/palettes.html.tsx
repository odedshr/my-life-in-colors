import { render } from 'nano-jsx';
import { ElementType, Palette } from '../types.js';

type Props = {
  onAddItemRequested: () => void;
  palettes: Palette[]
}

const Element: ElementType<Props> = (props) => (<form class="page palettes">
  <header>
    <h1 class="app-name">Palettes</h1>
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
    <a href="index.html">Back</a> | <button onClick={props.onAddItemRequested}>Add Palette</button>
  </footer>
</form>);

function appendChild(parent: HTMLElement, props: Props) {
  render(<Element
    palettes={props.palettes}
    onAddItemRequested={props.onAddItemRequested}
  />, parent);
}

export { appendChild };