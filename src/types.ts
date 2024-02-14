type ElementType<P, R = HTMLElement> = (props: P) => R;

type Color = {
  name: string;
  hex: string;
}

type Palette = {
  name: string;
  description?: string;
  colors: Color[];
};

type Day = {
  date: Date;
  colorValue: string;
}
type Month = {
  firstDay: Date;
  weeks: Day[][];
};

export {
  ElementType,
  Color,
  Palette,
  Day,
  Month
};