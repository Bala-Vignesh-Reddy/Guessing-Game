let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function() {
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML = `You guessed right, your number wasðð ${number}`
    }
    else if(input < number) {
        output.innerHTML = "You guessed to low!(upper kar bcðð)"
    };
    if(input > number) {
        output.innerHTML = "You guessed to high!(niche kar lol)ðð"
    }
});