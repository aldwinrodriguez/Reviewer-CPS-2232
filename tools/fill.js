function fillUpAns(params) {
    $('div#question [type=radio]').each(function (index) {
        this.checked = true;
    })

    $('div#question [type=checkbox]').each(function (index) {
        this.checked = true;
    })
}

fillUpAns();

$('div').click();