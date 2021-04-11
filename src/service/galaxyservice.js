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
    },
    getClusterDataForId: (id, clusters) => {
        return clusters.filter((cluster) => { if(cluster.id === id) { return cluster } else { return null } })[0] 
    },
    getClusterOptions: (clusters) => {
        return clusters !== undefined ? clusters.map((cluster, index) => {
            return {
                key: index,
                text: `${cluster.name} (${cluster.x},${cluster.y})`,
                value: index
            }
        }) : []
    },
    getStationOptions: () => {
        return [
            {key: 'SHIPYARD',text: 'Shipyard',value: 'SHIPYARD'},
            {key: 'WHARF',text: 'Wharf',value: 'WHARF'},
            {key: 'EQUIP',text: 'Equipment Dock',value: 'EQUIP'},
            {key: 'DEFENCE',text: 'Defense station',value: 'DEFENCE'},
            {key: 'TRADE',text: 'Trade station',value: 'TRADE'},
            {key: 'PIRATEBASE',text: 'Pirate base',value: 'PIRATEBASE'},
            {key: 'PIRATEDOCK',text: 'Pirate dock',value: 'PIRATEDOCK'},
            {key: 'TELADI_RING',text: 'Teladi ring',value: 'TELADI_RING'},
        ]
    },
    getRaceOptions: () => {
        return [
            {key: 'ARGON',text: 'Argon',value: 'ARGON'},
            {key: 'TELADI',text: 'Teladi',value: 'TELADI'},
            {key: 'PARANID',text: 'Paranid',value: 'PARANID'},
            {key: 'XENON',text: 'Xenon',value: 'XENON'},
            {key: 'SPLIT',text: 'Split',value: 'SPLIT'},
            {key: 'TERRAN',text: 'Terran',value: 'PIRATEDOCK'},
        ]
    },
    getFactionOptions: () => {
        return [
            {key: 'ARGON',text: 'Argon',value: 'ARGON'},
            {key: 'ANTIGONE',text: 'Antigone',value: 'ANTIGONE'},
            {key: 'HATIKVAH',text: 'Hatikvah',value: 'HATIKVAH'},
            {key: 'PARANID',text: 'Paranid',value: 'PARANID'},
            {key: 'HOLYORDER',text: 'Holy Order',value: 'HOLYORDER'},
            {key: 'ALLIANCE',text: 'Alliance',value: 'ALLIANCE'},
            {key: 'TELADI',text: 'Teladi',value: 'TELADI'},
            {key: 'MINISTRY',text: 'Ministry',value: 'MINISTRY'},
            {key: 'SCALEPLATE',text: 'Scale Plate',value: 'SCALEPLATE'},
            {key: 'XENON',text: 'Xenon',value: 'XENON'},
            {key: 'SPLIT',text: 'Split',value: 'SPLIT'},
            {key: 'FREESPLIT',text: 'Free Split',value: 'FREESPLIT'},
            {key: 'COURT',text: 'Court',value: 'COURT'},
            {key: 'FALLENFAMILIES',text: 'Fallen Families',value: 'FALLENFAMILIES'},
            {key: 'TERRAN',text: 'Terran',value: 'TERRAN'},
            {key: 'BUCCANEERS',text: 'Buccaneers',value: 'BUCCANEERS'},
            {key: 'PIONEER',text: 'Pioneer',value: 'PIONEER'},
            {key: 'YAKI',text: 'Yaki',value: 'YAKI'},
        ]
    },
    getFactionHqOptions: () => {
        let allHqFactions = ["","ALLIANCE","TELADI","HOLYORDER","ARGON","PARANID",
        "MINISTRY","HATIKVAH","SCALEPLATE","ANTIGONE"]
        return allHqFactions.map((hq, index) => {return {key: hq,text: hq,value: hq}})
    },
    getWareOptions: () => {
        let allWares = ["advancedcomposites","advancedelectronics","antimattercells","antimatterconverters","claytronics","dronecomponents",
        "energycells","engineparts","fieldcoils","foodrations","graphene","helium","hullparts","hydrogen","ice","majadust","majasnails","meat",
        "medicalsupplies","methane","microchips","missilecomponents","nividium","nostropoil","ore","plasmaconductors","quantumtubes","refinedmetals",
        "scanningarrays","shieldcomponents","silicon","siliconwafers","smartchips","software_economymk1","sojabeans","sojahusk","spacefuel","spaceweed",
        "spices","sunriseflowers","superfluidcoolant","swampplant","teladianium","turretcomponents","water","weaponcomponents","wheat","cheltmeat", 
        "scruffinfruits","computronicsubstrate","metallicmicrolattice","proteinpaste","siliconcarbide","stimulants","terranmre"]
        return allWares.map((ware) => {return {key: ware,text: ware,value: ware}})
    }
};

export default GalaxyService;