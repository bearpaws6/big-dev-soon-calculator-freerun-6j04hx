/* This is an example JavaScript file, feel free to remove/edit it anytime */
console.log(
  "%cProject by BigDevSoon",
  'font-size: 40px; font-weight: bold; color: #8A2BE2; font-family: "Comic Sans MS", cursive, sans-serif;'
);
console.log("Check out more projects at https://bigdevsoon.me");


$(document).ready(function() {

    const buttons = $(".button");
    const valueText = $('.value');
    const historyText = $('.history');
    let operation = [];

    $.each(buttons,function(_, element) {
        $(element).on('click', function() {
            const value = $(element).text();
            const last = operation.length - 1;

            if ($(element).hasClass("number")) {
                if (operation.length === 0 || isNaN(operation[last])) {
                    operation.push(value);
                    valueText.text(value);
                } else {
                    operation[last] += value;
                    valueText.text(operation[last]);
                }
            }

            if($(element).hasClass("point")) {
                if(operation.length !== 0 && !isNaN(operation[last]) && !operation[last].includes(".")) {
                    operation[last] += value;
                    valueText.text(operation[last]);
                }
            }

            if($(element).hasClass("operator")) {
                if(!isNaN(operation[last])) {
                    historyText.html(operation.join(' ') + " <span>" + value + "</span> ");
                    operation.push(value);
                }
            }
        })
    })
})