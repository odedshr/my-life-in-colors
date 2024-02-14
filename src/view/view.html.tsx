import { render } from 'nano-jsx';
import { ElementType, Palette, Month } from '../types.js';
import { Element as MonthView } from './month.html.js';

type Props = {
  onAddEntryButtonClicked: () => Promise<boolean>,
  palette: Palette,
  months: Month[],
}

const Element: ElementType<Props> = (props) => {
  let addEntryButton: HTMLButtonElement;

  return (<main class="page view">
    <header>
      <h2 class="palette-name">{props.palette.name}</h2>
      <ul class="palette-colors">
        {props.palette.colors.map(color => (
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
    onAddEntryButtonClicked={props.onAddEntryButtonClicked}
    palette={props.palette}
    months={props.months} />, parent);
}

export { appendChild };