type ElementType<P, R = HTMLElement> = (props: P) => R;

type Color = {
  name: string;
  hex: string;
}

type Palette = {
  id: string;
  name: string;
  description?: string;
  colors: Color[];
};

type Palettes = {
  items: Palette[];
  map: { [key: string]: Palette };
  current: Palette;
}

type Day = {
  date: Date;
  palette: { [key: string]: string };
}

type Month = {
  firstDay: Date;
  weeks: { date: Date, hex: string }[][];
};

export {
  ElementType,
  Color,
  Palette,
  Palettes,
  Day,
  Month
};