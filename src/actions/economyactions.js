const saveProduct = (product) => {
    return {
        type: "UPDATE_PRODUCT",
        data: product
    }
}

const saveNewProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        data: product
    }
}

const removeProduct = (product) => {
    return {
        type: "REMOVE_PRODUCT",
        data: product
    }
}

export default { saveProduct, saveNewProduct, removeProduct }