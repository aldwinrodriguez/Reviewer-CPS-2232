function getIndexes(str) {
    let first, second;

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element == '.') {
            first = str.substring(0, i);
            second = str.substring(i + 1);
        }
    }

    return [first, second];
}

for (let i = 0; i < $('div#questionstatement').length; i++) {
    const [first, second] = getIndexes($('div#questionstatement')[i].children[0].textContent);
    const choices = $('div#questionstatement')[i].nextElementSibling.children;
    for (let j = 0; j < choices.length; j++) {
        const choiceMargin = choices[j];
        if (choiceMargin.id == 'choicemargin') {
            const inpt = choiceMargin.children[0];
            const inputValue = choiceMargin.children[0].value;
            for (let k = 0; k < answers[first][second].length; k++) {
                const chara = answers[first][second][k];
                if (inputValue == chara){
                    inpt.checked = true;
                }
            }
        }
    }
}