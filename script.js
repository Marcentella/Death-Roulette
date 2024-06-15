

document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('button.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('not-grey');
        });
    });
});

document.getElementById('choose-button').addEventListener('click', function() {
    const personas = []; // Empty list where the not greyed buttons go
    const resultDiv = document.getElementById('result');
    const chooseButton = document.getElementById('choose-button');
    var honor = new Audio('sounds/rip.mp3');
    var bwomp = new Audio('sounds/bwomp.m4a');

    chooseButton.classList.add('rotate');
    chooseButton.disabled = true;
    setTimeout(() => {
        chooseButton.disabled = false;
        chooseButton.classList.remove('rotate');
    }, 5700);
    resultDiv.textContent = "Eligiendo...";


    // Find all buttons with the class "not-grey"
    const notGreyButtons = document.querySelectorAll('button.not-grey');
    notGreyButtons.forEach(button => {
        personas.push(button.textContent);
    });

    setTimeout(() => {
        resultDiv.textContent = "3";

        setTimeout(() => {
            resultDiv.textContent = "2";

            setTimeout(() => {
                resultDiv.textContent = "1";

                setTimeout(() => {
                    if (personas.length > 0) {
                        const chosen = personas[Math.floor(Math.random() * personas.length)];
                        if (chosen === "Karo" || chosen === "Fran" || chosen === "Tamy") {
                            honor.play();
                            resultDiv.textContent = `La elegida es: ${chosen}`;
                        } else {
                            honor.play();
                            resultDiv.textContent = `El elegido es: ${chosen}`;
                        }
                    } else {
                        bwomp.play();
                        resultDiv.textContent = "No hay personas elegidas.";
                    }
                }, 3000);
            }, 1400);
        }, 900);
    }, 500);
});
