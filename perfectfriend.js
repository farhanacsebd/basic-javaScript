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
const friendsName = ['tin', 'tinnia', 'Farhana', 'sojiba', 'Emadaa', 'Mim', 'Khusbukamini', 'Alveea', 'Sojoal', 'tiya'];
friendList = perfectFriend(friendsName);
console.log(friendList);
