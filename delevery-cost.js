// 3rd problem & its solution

function deliveryCost(ShirtQuantity) {
    // elements price
    const shirtFirstPart = 100;
    const shirtSceondPart = 80;
    const shirtRestofPart = 50;
    // empty elements will return

    if (ShirtQuantity <= 0) {
        return 'Qunatity doesnot have negative values.';
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
const shirts = deliveryCost(0);
console.log(shirts);