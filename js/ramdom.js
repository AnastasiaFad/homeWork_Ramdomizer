var array = [];
var minElem = document.getElementById('item__minValue');
var maxElem = document.getElementById('item__maxValue');
var generate = document.getElementById('item__btnGenerate');
var output = document.getElementById('item__sms');

function getRandom(min, max){
    min = Math.floor(min);
    max = Math.ceil(max);
    //console.log(Math.floor(Math.random() * (max + 1 - min)) + min)
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
function startGenerate() {
    var min = Number(minElem.value);
    var max = Number(maxElem.value);
    if (min < 0 || min % 1 !== 0 || //введение некорректных данных 
        max <= min || max % 1 !== 0) { //нужно ли делать проверку на null ?
        return (output.innerHTML = "Please enter correct data");
        // alert("Please enter correct data");
    }
    if (array.length >= max - min + 1) { //8 - 3 + 1 = 6 
        console.log(min, max, array.length)
        //generate.disabled
        return (output.innerHTML = "Elements are over")
        // alert("Attempts ended");
    } else {
        var random = getRandom(min, max);
        if (array.includes(random)) {
            random = getRandom(min, max);
        } else {
            array.push(random)
            return (output.innerHTML = `Generated number:${random}`)
            //generate.disabled = true;
        }
    }
}
function Exit(){
        array =[];
        minElem.value = null;
        maxElem.value = null;
        output.innerHTML = '';
}
document.getElementById('item__btnExit').addEventListener('click', Exit);
document.getElementById('item__btnGenerate').addEventListener('click', startGenerate);