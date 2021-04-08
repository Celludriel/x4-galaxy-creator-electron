const GalaxyService = {
    getGridCoordinates: (width, height, gameCoords) => {
        let widthOffset = Math.floor(width / 2)
        let heightOffset = Math.floor(height / 2)

        return [gameCoords[0] + widthOffset,gameCoords[1] + heightOffset]
    },
    getGameCoordinates: (width, height, gridCoords) => {
        let widthOffset = Math.floor(width / 2)
        let heightOffset = Math.floor(height / 2)

        return [gridCoords[0] - widthOffset,-(gridCoords[1] - heightOffset)]
    },
    getFactionColors: () => {
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
        return {
            "ARGON": "#0000ff",
            "ANTIGONE": "#00ffff",
            "HATIKVAH": "#ff6600",
            "PARANID": "#ffff00",
            "HOLYORDER": "#ff00ff",
            "ALLIANCE": "#6600ff",
            "TELADI": "#00ff00",
            "MINISTRY": "#108f31",
            "SCALEPLATE": "#82ae3f",
            "BUCCANEERS": "#ff9577",
            "TRINITY": "#808334",
            "SPLIT": "#ffd6b8",
            "FREESPLIT": "#ffd6b8",
            "COURT": "#3f3f6b",
            "FALLENFAMILIES": "#825a8a",
            "TERRAN": "#c7c7ff",
            "PIONEER": "#752d3b",
            "YAKI": "#fac600",
            "XENON": "#ff0000"
        }
    },
    getClusterOwner: (cluster) => {
        var stationCountForFaction = [];

        console.log(cluster.stations)
        if(cluster.stations !== undefined && cluster.stations.length > 0){
            for(var i=0;i < cluster.stations.length;i++){
                var factionCount = stationCountForFaction[cluster.stations[i].owner]
                if(factionCount === undefined){
                    stationCountForFaction[cluster.stations[i].owner] = 1
                } else {
                    stationCountForFaction[cluster.stations[i].owner] = factionCount + 1;
                }
            }
            var sorted_keys = Object.keys(stationCountForFaction).sort(function(a,b) { return stationCountForFaction[b] - stationCountForFaction[a]; });
            console.log(sorted_keys)
            return sorted_keys[0];
        }
        return null;
    }
};

export default GalaxyService;