function rainbowStop(h) {
    let f = (n, k = (n + h * 12) % 12) =>
        0.5 - 0.5 * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let rgb2hex = (r, g, b) =>
        [r, g, b]
            .map(x =>
                Math.round(x * 255)
                    .toString(16)
                    .padStart(2, 0)
            )
            .join("");
    return rgb2hex(f(0), f(8), f(4));
}

const INCLUSIONS = ["iridescent flakes", "flowers", "chunky glitter",
    "fine glitter", "chameleon pigment", "a snowglobe", "mylar flakes",
    "holographic glitter", "sprinkles", "sequins", "resin clippings",
    "metallic foil", "dried plants", "hearts", "crystals", "skulls",
    "stars", "moss", "shells", "wisps", "acrylic peels"]
const SCHEME = ["triade", "tetrade", "analogic"]
const VARIATION = ["default", "pastel", "soft", "light", "hard"]

randomColor = rainbowStop(Math.random())
var scheme = new ColorScheme;
scheme.from_hex(randomColor).scheme(_.sample(SCHEME)).distance(Math.random()).add_complement(true).variation(_.sample(VARIATION))

var schemeColors = scheme.colors();
var randomInclusion = _.sample(INCLUSIONS)
var randomizedColors = _.slice(_.shuffle(schemeColors), 0, 9)

randomizedColors = randomizedColors.map(i => '#' + i)
colorNames = randomizedColors.map(i => ntc.name(i)[1])

var app = new Vue({
    el: '#app',
    data: {
        colors: randomizedColors,
        colorNames: colorNames,
        randomInclusion: randomInclusion
    }
})
