const defaultValue = JSON.stringify([
    { "id": "running", "name": "Running", "colors": [{ "name": "Rest", "hex": "#A1A2A6" }, { "name": "Light", "hex": "#024959" }, { "name": "Distance", "hex": "#F2C12E" }, { "name": "Uphills", "hex": "#F2AE30" }, { "name": "Mixed", "hex": "#593E25" }] },
    { "id": "drinking", "name": "Drinking", "colors": [{ "name": "Sober", "hex": "#FFEC5C" }, { "name": "1-2", "hex": "#B4CF66" }, { "name": "3-5", "hex": "#44803F" }, { "name": ">5", "hex": "#146152" }] },
    { "id": "sleeping", "name": "Sleeping", "colors": [{ "name": ">8hrs", "hex": "#747F7F" }, { "name": "7-8", "hex": "#72F2EB" }, { "name": "5-6", "hex": "#00CCC0" }, { "name": ">5", "hex": "#1B7F79" }, { "name": "Red eye", "hex": "#FF4858" }] },
    { "id": "reading", "name": "Reading", "colors": [{ "name": "N/A", "hex": "#FAEDDA" }, { "name": "1-5", "hex": "#AEE8CA" }, { "name": "5-10", "hex": "#6ACFC9" }, { "name": ">10", "hex": "#26B6C6" }] }
]);
// const palette = {
//   name: 'List Number 1',
//   colors: [
//     { name: 'Status 1', hex: '#22BA28' },
//     { name: 'Status 2', hex: '#EEDA23' },
//     { name: 'Status 3', hex: '#BA227D' },
//   ]
// };
function getPalettes() {
    const items = JSON.parse(localStorage.getItem('palettes') || defaultValue);
    const map = {};
    const current = getCurrentPaletteId();
    items.forEach(item => {
        if (!item.id) {
            item.id = item.name.toLowerCase().replace(/ /g, '-');
        }
        map[item.id] = item;
    });
    return {
        items, map, current: map[current] || items[0] || null
    };
}
function setPalettes(palettes) {
    localStorage.setItem('palettes', JSON.stringify(palettes));
}
function getCurrentPaletteId() {
    return localStorage.getItem('currentPaletteId') || 'running';
}
function setCurrentPaletteId(id) {
    localStorage.setItem('currentPaletteId', id);
}
function getDays() {
    return JSON.parse(localStorage.getItem('days') || '{}');
}
function setDays(days) {
    localStorage.setItem('days', JSON.stringify(days));
}
export { getDays, setDays, getPalettes, setPalettes, getCurrentPaletteId, setCurrentPaletteId };
