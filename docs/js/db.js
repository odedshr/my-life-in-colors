const defaultValue = JSON.stringify([{ "name": "Running", "colors": [{ "name": "Rest", "hex": "#A1A2A6" }, { "name": "Light", "hex": "#024959" }, { "name": "Distance", "hex": "#F2C12E" }, { "name": "Uphills", "hex": "#F2AE30" }, { "name": "Mixed", "hex": "#593E25" }] }, { "name": "Drinking", "colors": [{ "name": "Sober", "hex": "#FFEC5C" }, { "name": "1-2", "hex": "#B4CF66" }, { "name": "3-5", "hex": "#44803F" }, { "name": ">5", "hex": "#146152" }] }, { "name": "Sleeping", "colors": [{ "name": ">8hrs", "hex": "#747F7F" }, { "name": "7-8", "hex": "#72F2EB" }, { "name": "5-6", "hex": "#00CCC0" }, { "name": ">5", "hex": "#1B7F79" }, { "name": "Red eye", "hex": "#FF4858" }] }, { "name": "Reading", "colors": [{ "name": "N/A", "hex": "#FAEDDA" }, { "name": "1-5", "hex": "#AEE8CA" }, { "name": "5-10", "hex": "#6ACFC9" }, { "name": ">10", "hex": "#26B6C6" }] }]);
function getPalettes() {
    return JSON.parse(localStorage.getItem('palettes') || defaultValue);
}
function setPalettes(palettes) {
    localStorage.setItem('palettes', JSON.stringify(palettes));
}
export { getPalettes, setPalettes };
