function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Nirvana",
            title: "Never Mind",
            release_year: 1992,
            formats: {
                1: "LP",
                2: "CD",
                3: "8T"
            },
            gold: false
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;