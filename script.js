const add = function(num1, num2) {
    return num1+num2;
};

const subtract = function(num1,num2) { 
    return num1-num2;
};

const divide = function(num1, num2) {
    if(num2==0){
        return 'Divided by zero?'
    }
    return num1/num2;
}

const multiply = function(num1, num2) { 
    return num1*num2;

};



const operate = function(arr1){
    let arr = arr1.join("").split(/\+|\-|\/|\*/).filter(n=> n!='');
    if (arr.length==1){
        return arr[0];
    }
    console.log(arr[0])
    switch (true){
        case arr1.some(n=> n == '+'):
            return add(arr[0], arr[1]);
        
        case arr1.some(n=> n == '-'):
            return subtract(arr[0], arr[1]);
        
        case arr1.some(n=> n == '*'):
            return multiply(arr[0], arr[1]);

        case arr1.some(n=> n == '/'):
            return divide(arr[0], arr[1])

    }

} 
const screen = document.querySelector('.screen')

const display = function(){
    
    screen.textContent = screen.textContent + this.textContent;
    
    args.push(this.textContent);


}

const operator = function(){

    screen.textContent = screen.textContent + this.textContent;
    let arr = args.join("").split(/\+|\-|\/|\*/);
    if(arr.length>=2){
        screen.textContent = operate(args) + this.textContent;
        args=[]
        args.push(screen.textContent);
    }
    args.push(this.textContent);
 

}

const calculate = function(){
    console.log(args)
    screen.textContent = operate(args);

    console.log(operate(args))
   

}

const clearAll = function(){
    screen.textContent = '';
    args =[];
}
function main (){
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(numbers => numbers.addEventListener('click', display))

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operators => operators.addEventListener('click',operator))

    const equal = document.querySelector('#equals');
    equal.addEventListener('click', calculate);

    const clear = document.querySelector('#clear');
    clear.addEventListener('click', clearAll )
}

let args = [];
main();
