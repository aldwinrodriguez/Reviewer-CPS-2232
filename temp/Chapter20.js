


// $('*').css('color', 'black')

// border-bottom: 5px solid;
// border-color: red;
// border-color: green;

let answers = {
    0: "ABC",
    1: "CD",
    2: "B",
    3: "E",
    4: "D",
    5: "A",
    6: "B",
    7: "CD",
    8: "A",
    9: "C",
    10: "A",
    11: "D",
    12: "E",
    13: "C",
    14: "D",
    15: "B",
    16: "C",
    17: "E",
    18: "D",
    19: "BCD",
    20: "B",
    21: "A",
}

$('div#choicemargin').on('click', function(){
    let self = $(this);
    console.log(this.children[0])
    let element = this.children[0];
    let value = element.value;
    let name = element.name;
    let questionNumber = element.name[name.length - 1];

    console.log(value, questionNumber);

    for (let index = 0; index < answers[questionNumber].length; index++) {
        const element = answers[questionNumber][index];
        console.log(element);
        if (value == element){
            self.css('color', 'green');
            console.log("true");
        } else {
            self.css('color', 'red');
            console.log("false");
        }
    }
})

$0.addEventListener('click', function(){
	console.log(this.firstElementChild.value)
})

let element = $('div#question')[0].children[1].children[2].children[0];
$('div#question')[0].children[1].children[2].children[0].value

let value = element.value;
let questionNumber = element.name[element.name.length-1];
/*
    choices
    choicemargin
    input
*/

console.log(answers[2]);

$('div#choicemargin').on('click', function(){
    console.log(this.parentElement.previousElementSibling.children[0].textContent.substring(3));
})


/*
    So questions will correspond to their index

    im going to need to splice the string name
    name="QA0"
    name="QB0"
    or
    name="Q3"

    last index corresponds to the question number

*/