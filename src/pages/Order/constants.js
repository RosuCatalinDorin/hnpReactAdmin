export const ORDER_STEPS = {
    receive: {
        description: "Transmisa spre HNP",
        id: 0
    },
    process: {
        description: "In analiza",
        id: 1
    },
    confirmation: {
        description: "Confirmata",
        id: 2
    },
    waitForShip: {
        description: "Se pregateste livrarea",
        id: 3
    },
    done: {
        description: "Comanda livrata",
        id: 4
    }
}

export const SHIPING_COST = 2;