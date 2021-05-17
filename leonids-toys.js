const creativeToys = [
    {

        id: 1,
        name: "Legos",
        type: "Construction Set",
        price: 75
    },
    {
        id: 2,
        name: "sticker",
        type: "Label",
        price: 50.30
    },
    {
        id: 3,
        name: "Mr.Potato Head",
        type: "Plastic Model",
        price: 57.99
    }
]

const crayons = {
    name: "yellow crayon",
    type: "plastic",
    price: 32.61

}

for (const toy of creativeToys) {
    console.log(`The toy ${toy.name} is a ${toy.type} and costs ${toy.price}.`)
}

const addToyToCreativeToys = (toyObject) => {
    const lastIndex = creativeToys.length - 1
    const currentLastToy = creativeToys [lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
    creativeToys.push(toyObject)


}

addToyToCreativeToys(crayons)


console.log(creativeToys)
