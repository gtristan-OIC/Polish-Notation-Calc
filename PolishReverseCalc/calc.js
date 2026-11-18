// redoing this because i used my personal github
let stack = []; //this is my stack varible which is what stores my numbers

const readline = require("readline");

const rl = readline.createInterface({  //this is new i would normally use a consol.log but i found a new method for creating an interface
    input: process.stdin,
    output: process.stdout
});

console.log("reverse notation polish calc");
console.log("type in your first number and press enter then your second number and press enter then your operator (+, -, *, /)");

rl.on("line", (input) =>  {
    if (input.toLocaleLowerCase() === "q"){ // this input checks to see if you pressed q and hit enter
        console.log("calc has been shut off");
        rl.close();
        return;
    }

    let number = Number(input); // this converts the users input from text to an actual number i can calculate it

    // checks with .isNaN if what the user input was actually something that can be used like a number.
    if (input.trim() !== "" && !Number.isNaN(number)) {
        
        stack.push(number);// this just adds the number to the end of the stack witht the push method.
    }

    // this else if checks if you entered one of the four operators 
    else if (input === "+" || input === "-" ||
             input === "*" || input === "/") {

        if (stack.length < 2) { // if you did it checks if there are at least 2 numbers in the current stack
            console.log("you need 2 numbas"); 
            return;
        }
        let num2 = stack.pop(); // this removes the last number from the stack and stores it 
        let num1 = stack.pop();// thus removed the next number from the stack and stores it 
        let result; //  this is a varible to store the answer of the equation 

        if (input === "+") { // these if elses are just the logic for sloving what ever equation you gave it
            result = num1 + num2;
        }
        else if (input === "-") {
            result = num1 - num2;
        }
        else if (input === "*") {
            result = num1 * num2;
        }
        else if (input === "/") {
            if (num2 === 0) {
                console.log("cant divide by zero"); // this incase you try to divide by zero
                stack.push(num1);//both of these just push the numbers back into the stack
                stack.push(num2);
                return;
            }
            result = num1 / num2;
        }
        stack.push(result); // this pushes the solution to the very front of the stack show it shows your solution
    }
    else {
        console.log("type in a number or an operator like addition or minus ('-,+')"); // this in case they dont input a number
    }
    console.log("Current stack:", stack);
    console.log("you can always press q and enter to quit the calculator")
});


    
        // rl.question("Type operator (+, -, *, /): ", (operator) => {

        //     rl.question("type second number: ", (input2) => {
        //         let num2 = Number(input2);

        //         if (operator === "+") {
        //             console.log(num1 + num2);
        //         }
        //         else if (operator === "-") {
        //             console.log(num1 - num2);
        //         }
        //         else if (operator === "*") {
        //             console.log(num1 * num2);
        //         }
        //         else if (operator === "/") {
        //             console.log(num1 / num2);
        //         }
        //         else {
        //             console.log("type an operator");
        //         }

//         rl.close();
//     });
//     });
// });
