import { render } from 'nano-jsx';
import { ElementType, Palette, Palettes, Month } from '../types.js';
import { Element as MonthView } from './month.html.js';

type Props = {
  onSelectPalette: (paletteId: string) => void,
  palettes: Palettes,
  months: Month[],
}

type Attributes = { value: string, selected?: string, };

function getAttributes(palette: Palette, current: Palette) {
  const attributes: Attributes = { value: palette.id };
  if (palette.id === current.id) {
    attributes.selected = "selected";
  }
  return attributes;
}

const Element: ElementType<Props> = (props) => {
  const currentPalette = props.palettes.current;

  const onChange = (evt: Event) => evt.target && props.onSelectPalette((evt.target as HTMLSelectElement).value);

  return (<main class="page view">
    <header>
      <h2 class="palette-name">
        <select id="select-palette" onChange={onChange}>
          {props.palettes.items.map(palette => (<option {...getAttributes(palette, currentPalette)}>{palette.name}</option>))}
        </select>
      </h2>
      <ul class="palette-colors">
        {currentPalette.colors.map(color => (
          <li class="color" {...{ style: `--color: ${color.hex}` }}>
            {color.name}
          </li>))}
      </ul>
    </header>
    <article class="timeline">
      {props.months.map((month, i) => MonthView({ month }))}
    </article>
    <footer>
      <button>Add Status</button>
    </footer>
  </main>)
};

function appendChild(parent: HTMLElement, props: Props) {
  render(<Element
    onSelectPalette={props.onSelectPalette}
    palettes={props.palettes}
    months={props.months} />, parent);
}

export { appendChild };