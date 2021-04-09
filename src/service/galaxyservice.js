/*
    xenon: {color: '#880000', border: '#c90000'},
    paranid: {color: '#2d0050', border: '#8000ff'},
    alliance: {color: '#b03cca', border: '#b03cca'},
    split: {color: '#5e2204', border: '#ff691e'},
    argon: {color: '#00256e', border: '#0055ff'},
    antigone: {color: '#4023ae', border: '#5033de'},
    hatikvah: {color: '#147a70', border: '#20f6e1'},
    teladi: {color: '#6e7c2a', border: '#a9c22e'},
    ministry: {color: '#94bc92', border: '#94bc92'},
    holyorder: {color: '#b45694', border: '#ff72ad'},
    freesplit: {color: '#a45525', border: '#ff8000'},
    pioneers: {color: '#41aa9a', border: '#66aa9a'},
    yaki: {color: '#fe8dfa', border: '#ffadfa'},
    terran: {color: '#bcd0fb', border: '#bcd0fb'},
    none: {color: '#666', border: '#aaa'}
 */
const GalaxyService = {
    getGameCoordinates: (gridCoords) => {
        return [gridCoords[0],-(gridCoords[1])]
    },
    getFactionColors: () => {
        return {
            "ARGON": "#00256e",
            "ANTIGONE": "#4023ae",
            "HATIKVAH": "#147a70",
            "PARANID": "#2d0050",
            "HOLYORDER": "#b45694",
            "ALLIANCE": "#b03cca",
            "TELADI": "#6e7c2a",
            "MINISTRY": "#94bc92",
            "SCALEPLATE": "#82ae3f",
            "BUCCANEERS": "#ff9577",
            "TRINITY": "#808334",
            "SPLIT": "#5e2204",
            "FREESPLIT": "#a45525",
            "COURT": "#3f3f6b",
            "FALLENFAMILIES": "#825a8a",
            "TERRAN": "#bcd0fb",
            "PIONEER": "#41aa9a",
            "YAKI": "#fe8dfa",
            "XENON": "#880000"
        }
    },
    getClusterOwner: (cluster) => {
        let stationCountForFaction = [];
        if(cluster.stations !== undefined && cluster.stations.length > 0){
            for(let i=0;i < cluster.stations.length;i++){
                let factionCount = stationCountForFaction[cluster.stations[i].owner]
                if(factionCount === undefined){
                    stationCountForFaction[cluster.stations[i].owner] = 1
                } else {
                    stationCountForFaction[cluster.stations[i].owner] = factionCount + 1;
                }
            }
            let sorted_keys = Object.keys(stationCountForFaction).sort(function(a,b) { return stationCountForFaction[b] - stationCountForFaction[a]; });
            return sorted_keys[0];
        }
        return null;
    }
};

export default GalaxyService;