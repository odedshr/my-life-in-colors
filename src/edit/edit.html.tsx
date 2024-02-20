import { render } from 'nano-jsx';
import { ElementType, Palette, Day } from '../types.js';

type Props = {
  onSubmitted: (day: Day) => void;
  onCancel: () => void;
  palettes: Palette[],
  day: Day,
}

const Element: ElementType<Props> = (props) => {
  let dirtyValues = { ...props.day.palette }
  console.log(props.day);

  const onSubmit = (evt: Event) => {
    const newDay = { ...props.day };
    newDay.palette = { ...props.day.palette, ...dirtyValues };
    props.onSubmitted(newDay);
    evt.preventDefault();
    return false;
  }

  return (<form class="page day-edit" onSubmit={onSubmit}>
    <header>
      <h2 class="palette-name">day</h2>
    </header>
    <article class="values">
      <ul class="palettes">
        {props.palettes.map(palette => {
          const selectedValue = props.day.palette[palette.id] || palette.colors[0].name;
          return (
            <li>
              <h3>{palette.name}</h3>
              <ul class="colors">
                {palette.colors.map((color, i) => {
                  const checked = (color.name === selectedValue) ? { checked: "checked" } : {};
                  const attributes = {
                    id: `${palette.id}-${i}`,
                    name: palette.id,
                    style: `--color: ${color.hex}`,
                    value: color.name,
                    onChange: () => { dirtyValues[palette.id] = color.name; }
                  }
                  return (<li>
                    <input type="radio" {...attributes} {...checked} />
                    <label for={`${palette.id}-${i}`}>{color.name}</label>
                  </li>);
                })}
              </ul>
            </li>);
        })}
      </ul>
    </article>
    <footer>
      <button>Save</button>
      <button onClick={props.onCancel}>Cancel</button>
    </footer>
  </form>)
};

function appendChild(parent: HTMLElement, props: Props) {
  render(<Element
    onSubmitted={props.onSubmitted}
    onCancel={props.onCancel}
    palettes={props.palettes}
    day={props.day} />, parent);
}

export { appendChild };