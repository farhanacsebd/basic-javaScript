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

let seer = -160;
let totalResult = seerToMon(seer);
console.log(totalResult);




