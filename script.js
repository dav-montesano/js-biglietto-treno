//here i declare the ditance variable globally, withtout value. then i set a do-while cycle: do the first thing, then with while we force user to repeat until that condition is true
//we also put there an if to check the undefinied valueonly to have a way to show alerts in case of not valid inputs. with this type of if at the very beginning the alert won't be shown, since it is undefined, with no value, so the if instructions is skipped. then when an input is there for real, although is not valid, will be different from undefined so the if is compiled
let distanceInput;
do {
    if (distanceInput !== undefined) {
        alert("Invalid input. Please enter a valid number greater than 0 for the distance.");
    }
    distanceInput = prompt("Enter kilometres distance to cover:");
} while (isNaN(distanceInput) || distanceInput <= 0);

let ageInput;
do {
    if (ageInput !== undefined) {
        alert("Invalid input. Please enter a valid number greater than 0 for your age.");
    }
    ageInput = prompt("Enter your age:");
} while (isNaN(ageInput) || ageInput <= 0);


//function to calculate the price based on the inputs, and returns the right value
function getTicketPrice (ageInput, distanceInput) {
    const basicPrice = 0.21 * distanceInput;
    if (ageInput < 18) {
        return basicPrice * 0.8;
    } else if (ageInput > 65) {
        return basicPrice * 0.6;
    } else {
        return basicPrice;
    }
}


//call to the function, get the returned value, and show it with an alert
const finalPrice = getTicketPrice (ageInput, distanceInput);
alert(`Your final price is ${finalPrice.toFixed(2)}€`);