let input=document.getElementById('inputBox');
let buttons = document.querySelectorAll('button')
let string="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{

        if(e.target.innerHTML == '='){
             let string1 = eval( '(' + string + ')' );
            input.value = string1;
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } 
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
         }
         else if(e.target.innerHTML == '^') {
            string = string + '**';
            input.value=string;
         }
          else {
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})

// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');
// let string = "";
// let arr = Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML === '=') {
//             let result;
//             try {
//                 result = eval(string);
//             } catch (error) {
//                 result = 'Invalid expression';
//             }
//             input.value = result;
//         } else if (e.target.innerHTML === 'AC') {
//             string = "";
//             input.value = string;
//         } else if (e.target.innerHTML === 'DEL') {
//             string = string.substring(0, string.length - 1);
//             input.value = string;
//         } else if (e.target.innerHTML === '^') {
//             handlePowerOperator();
//         } else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     });
// });

// function handlePowerOperator() {
//     let powerIndex = string.lastIndexOf('^');
//     if (powerIndex === -1) return;

//     let base = string.substring(0, powerIndex);
//     let exponent = string.substring(powerIndex + 1);
//     let result = Math.pow(parseFloat(base), parseFloat(exponent));

//     string = base + '^' + exponent + '=' + result;
//     input.value = result;
// }
