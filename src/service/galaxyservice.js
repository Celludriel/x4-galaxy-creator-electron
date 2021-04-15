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
        return [
            {key: '',text: '',value: null},
            {key: 'ANTIGONE',text: 'Antigone',value: 'ANTIGONE'},
            {key: 'HATIKVAH',text: 'Hatikvah',value: 'HATIKVAH'},
            {key: 'PARANID',text: 'Paranid',value: 'PARANID'},
            {key: 'HOLYORDER',text: 'Holy Order',value: 'HOLYORDER'},
            {key: 'ALLIANCE',text: 'Alliance',value: 'ALLIANCE'},
            {key: 'TELADI',text: 'Teladi',value: 'TELADI'},
            {key: 'MINISTRY',text: 'Ministry',value: 'MINISTRY'},
            {key: 'SCALEPLATE',text: 'Scale Plate',value: 'SCALEPLATE'}
        ]
    },    
    getGateOptions: () => {
        return [
            {key: 'ACCELERATOR_01',text: 'Accelerator Type 1',value: 'ACCELERATOR_01'},
            {key: 'ACCELERATOR_02',text: 'Accelerator Type 2',value: 'ACCELERATOR_02'},
            {key: 'ANCIENT_GATE',text: 'Regular Gate',value: 'ANCIENT_GATE'},
            {key: 'TERRAN_GATE',text: 'Terran Gate',value: 'TERRAN_GATE'}
        ]
    },
    getWareOptions: () => {
        let allWares = ["advancedcomposites","advancedelectronics","antimattercells","antimatterconverters","claytronics","dronecomponents",
        "energycells","engineparts","fieldcoils","foodrations","graphene","helium","hullparts","hydrogen","ice","majadust","majasnails","meat",
        "medicalsupplies","methane","microchips","missilecomponents","nividium","nostropoil","ore","plasmaconductors","quantumtubes","refinedmetals",
        "scanningarrays","shieldcomponents","silicon","siliconwafers","smartchips","software_economymk1","sojabeans","sojahusk","spacefuel","spaceweed",
        "spices","sunriseflowers","superfluidcoolant","swampplant","teladianium","turretcomponents","water","weaponcomponents","wheat","cheltmeat", 
        "scruffinfruits","computronicsubstrate","metallicmicrolattice","proteinpaste","siliconcarbide","stimulants","terranmre"]
        return allWares.map((ware) => {return {key: ware,text: ware,value: ware}})
    },
    getMusicOptions: () => {
        let allMusic = ["music_soundtrack_periphery","music_soundtrack_teladi","music_soundtrack_argon","music_soundtrack_paranid","music_soundtrack_xenon","music_cluster_antigone_memorial",
            "music_cluster_getsu_fune","music_cluster_frontier_edge","music_cluster_turquoise_sea","music_cluster_complete","music_bigbattle","music_suspense","music_default","music_01","music_02",
            "music_03","music_04","music_off"]
        return allMusic.map((music) => {return {key: music,text: music,value: music}})
    },
    getBackdropOptions: () => {
        let allBackdrops = ["empty_space","Cluster_01","Cluster_05_work","Cluster_01","Cluster_02","Cluster_03","Cluster_04","Cluster_05","Cluster_06","Cluster_07","Cluster_08","Cluster_09","Cluster_10","Cluster_11",
        "Cluster_12","Cluster_13","Cluster_14","Cluster_15","Cluster_16","Cluster_17","Cluster_18","Cluster_19","Cluster_20","Cluster_21","Cluster_22","Cluster_23","Cluster_24","Cluster_25","Cluster_26",
        "Cluster_27","Cluster_28","Cluster_29","Cluster_30","Cluster_31","Cluster_32","Cluster_33","Cluster_34","Cluster_35","Cluster_36","Cluster_37","Cluster_38","Cluster_39","Cluster_40","Cluster_41",
        "Cluster_42","Cluster_43","Cluster_44","Cluster_45","Cluster_46","Cluster_47","Cluster_48","Cluster_49","Cluster_50","cluster_black","cluster_black_wlight","cluster_black_wlight_tp","cluster_sm2_background",
        "cluster_sm3_background","cluster_sm_background"]
        return allBackdrops.map((backdrop) => {return {key: backdrop,text: backdrop,value: backdrop}})
    }
};

export default GalaxyService;