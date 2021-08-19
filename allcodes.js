// 1st problem & its solution
function seerToMon(seer) {
    // return to negetive values.
    if (seer < 0) {
        return 'seer never give negative value';
    }
    // give a return value
    let mon = seer / 40;
    return mon;
}
let seer = 160;
let totalResult = seerToMon(seer);
console.log(totalResult);
//--------------------------------1st problem done------------------------------------------------------------------------------------
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
let elementsPrices = totalSales(2, 4, 3);
console.log(elementsPrices);
//--------------------------------2nd problem done------------------------------------------------------------------------------------
// 3rd problem & its solution
function deliveryCost(ShirtQuantity) {
    // elements price
    const shirtFirstPart = 100;
    const shirtSceondPart = 80;
    const shirtRestofPart = 50;
    // empty elements will return
    if (ShirtQuantity <= 0) {
        return 'Quantity doesnot have negative values.';
    }
    // 1st part start in here
    else if (ShirtQuantity <= 100) {
        const count = ShirtQuantity * shirtFirstPart;
        return count;
    }
    // 2nd part start in here
    else if (ShirtQuantity <= 200) {
        const firstShirt = 100 * shirtFirstPart;
        const restOfTheShirt = ShirtQuantity - 100;
        const sceondShirt = restOfTheShirt * shirtSceondPart;
        const totalShirts = firstShirt + sceondShirt;
        return totalShirts;
    }
    // 3rd part start in here
    else {
        const firstShirt = 100 * shirtFirstPart;
        const sceondShirt = 100 * shirtSceondPart;
        const restShirt = ShirtQuantity - 200;
        const lastShirts = restShirt * shirtRestofPart;
        const totalShirts = firstShirt + sceondShirt + lastShirts;
        return totalShirts;
    }
}
// give in here only outputs
const shirts = deliveryCost(75);
console.log(shirts);
//--------------------------------3rd problem done------------------------------------------------------------------------------------
// 4th problem & its solution
function perfectFriend(numbers) {
    // negative values return only
    if (numbers.length == 0) {
        return 'empty strings';
    }
    // for staring in here
    for (i = 0; i < numbers.length; i++) {
        let elements = numbers[i];
        if (elements.length == 5) {
            return elements;
        }
    }
    return 'not found';
}
//list of the array
const friendsName = ['tin', 'tinni', 'Farhana', 'sojib', 'Emad', 'Mim', 'Khusbukamini', 'Alvee', 'Sojoal', 'tiya'];
friendList = perfectFriend(friendsName);
console.log(friendList);
    //--------------------------------4th problem done-------------------