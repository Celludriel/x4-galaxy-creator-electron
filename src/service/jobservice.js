const JobService = {
    getSizeOptions: () => {
        return [
            {key: 'ship_s',text: 'Small',value: 'ship_s'},
            {key: 'ship_m',text: 'Medium',value: 'ship_m'},
            {key: 'ship_l',text: 'Large',value: 'ship_l'},
            {key: 'ship_xl',text: 'Extra Large',value: 'ship_xl'},
        ]
    },
    getFactionOptions: () => {
        return [
            {key: '',text: '',value: ''},
            {key: 'argon',text: 'Argon',value: 'argon'},
            {key: 'antigone',text: 'Antigone',value: 'antigone'},
            {key: 'hatikvah',text: 'Hatikvah',value: 'hatikvah'},
            {key: 'paranid',text: 'Paranid',value: 'paranid'},
            {key: 'holyorder',text: 'Holy Order',value: 'holyorder'},
            {key: 'alliance',text: 'Alliance',value: 'alliance'},
            {key: 'teladi',text: 'Teladi',value: 'teladi'},
            {key: 'ministry',text: 'Ministry',value: 'ministry'},
            {key: 'scaleplate',text: 'Scale Plate',value: 'scaleplate'},
            {key: 'xenon',text: 'Xenon',value: 'xenon'},
            {key: 'split',text: 'Split',value: 'split'},
            {key: 'freesplit',text: 'Free Split',value: 'freesplit'},
            {key: 'court',text: 'Court',value: 'court'},
            {key: 'fallensplit',text: 'Fallen Families',value: 'fallensplit'},
            {key: 'terran',text: 'Terran',value: 'terran'},
            {key: 'pioneers',text: 'Pioneer',value: 'pioneers'},
            {key: 'yaki',text: 'Yaki',value: 'yaki'},
            {key: 'ownerless',text: 'ownerless',value: 'ownerless'},
            {key: 'faction.player',text: 'faction.player',value: 'faction.player'}
        ]
    },
    getFactionRaceOptions: () => {
        return [
            {key: '',text: '',value: ''},
            {key: 'argon',text: 'Argon',value: 'argon'},
            {key: 'paranid',text: 'Paranid',value: 'paranid'},
            {key: 'teladi',text: 'Teladi',value: 'teladi'},
            {key: 'xenon',text: 'Xenon',value: 'xenon'},
            {key: 'split',text: 'Split',value: 'split'},
            {key: 'terran',text: 'Terran',value: 'terran'}
        ]
    },    
    getBasketOptions: () => {
        let baskets = ["","advancedelectronics","antimattercells","advancedcomposites","claytronics","dronecomponents","energycells","engineparts","fieldcoils","foodrations","graphene","helium","hullparts",
            "hydrogen","ice","majadust","majasnails","methane","meat","medicalsupplies","microchips","missilecomponents","nividium","nostropoil","ore","plasmaconductors","quantumtubes","refinedmetals",
            "scanningarrays","shieldcomponents","silicon","siliconwafers","smartchips","sojabeans","sojahusk","spacefuel","spaceweed","spices","sunriseflowers","superfluidcoolant","swampplant","teladianium",
            "turretcomponents","water","weaponcomponents","wheat","bio","bio_argon","bio_paranid","bio_teladi","construction_ships","construction_stations","energy","equipment","food","food_argon","food_paranid",
            "food_teladi","gases","import_argon","import_paranid","import_teladi","minerals","minerals_xenon","refined","refined_gas","refined_mineral","surface","tech","argon_agriculture","paranid_agriculture",
            "teladi_agriculture","global_illegal","pirate_container","all","all_container","all_solid","all_liquid","research_gamestart_common","spaceweed_cheat","cheltmeat","scruffinfruits","computronicsubstrate",
            "metallicmicrolattice","siliconcarbide","proteinpaste","terranmre","stimulants","construction_ships_terran","construction_stations_terran","bio_terran","food_terran","tech_terran","refined_gas_terran",
            "refined_mineral_terran","all_container_terran"]
        return baskets.map((basket, index) => {return {key: basket,text: basket,value: basket}})
    },
    getOrderOptions: () => {
        let orders = ["","Recon","TradeRoutine","Middleman","Patrol","Police","Escort","SupplyFleet","MiningRoutine","FindBuildTasks","MoveWait","Plunder"]
        return orders.map((order, index) => {return {key: order,text: order,value: order}})
    },
    getRelationOptions: () => {
        let relations = ["","self","member","neutral","friend","dock","kill","killmilitary","nemesis","enemy"]
        return relations.map((relation, index) => {return {key: relation,text: relation,value: relation}})
    },
    getComparisonOptions: () => {
        let comparisons = ["","exact","ge","gt","le","lt","not"]
        return comparisons.map((comparison, index) => {return {key: comparison,text: comparison,value: comparison}})
    }
};

export default JobService;