import { Palette } from "./types";

function getPalettes() {
  return JSON.parse(localStorage.getItem('palettes') || '[]') as Palette[];
}

function setPalettes(palettes: Palette[]) {
  localStorage.setItem('palettes', JSON.stringify(palettes));
}

export { getPalettes, setPalettes }