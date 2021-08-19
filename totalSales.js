// 2nd problem & its solution


function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {

    // return here only negative value

    if (shirtQuantity < 0 && pantQuantity < 0 && shoesQuantity < 0) {
        return "empty price";
    }
    // per elements price

    let perShirt = 100;
    let perPant = 200;
    let perShoes = 500;

    // there is only positive values return

    if (shirtQuantity < 0) {
        shirtQuantity = 0;
    }
    if (pantQuantity < 0) {
        pantQuantity = 0;
    }
    if (shoesQuantity < 0) {
        shoesQuantity = 0
    }
    // here multiplying paremeters

    let totalShirt = shirtQuantity * perShirt;
    let totalPant = pantQuantity * perPant;
    let totalShoes = shoesQuantity * perShoes;

    // total elements Quantity
    let totalElements = totalShirt + totalPant + totalShoes;
    return totalElements;

}
// here only showing the outputs
let elementsPrices = totalSales(-2, -2, 0);
console.log(elementsPrices);