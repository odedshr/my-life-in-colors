function getPalettes() {
    return JSON.parse(localStorage.getItem('palettes') || '[]');
}
function setPalettes(palettes) {
    localStorage.setItem('palettes', JSON.stringify(palettes));
}
export { getPalettes, setPalettes };
