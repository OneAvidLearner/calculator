const add = function(num1, num2) {
    
    return parseFloat(num1)+ parseFloat(num2);
};

const subtract = function(num1,num2) { 
    return num1-num2;
};

const divide = function(num1, num2) {
    if(num2==0){
        return 'Divided by zero?'
    }
    else if (countDecimals(num1/num2)){
        return (num1/num2).toFixed(3)
    }
    else return num1/num2;
}

const multiply = function(num1, num2) { 
    if (countDecimals(num1*num2)){
        return (num1*num2).toFixed(3)
    }
    else return num1*num2;

};



const operate = function(arr1){
    let arr = arr1.join("").split(/\+|\-|\/|\*/).filter(n=> n!='');
    if (arr.length==1){
        return arr[0];
    }
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
    screen.textContent = operate(args);

   

}

const countDecimals = function (value) { 
    if ((value % 1) != 0) 
        return value.toString().split(".")[1].length;  
    return 0;
}

const decimal = function(){
    let copy = screen.textContent.split(/\+|\-|\/|\*/)
    if(copy[1]){
        if(!copy[1].split('').some(n=> n=='.')){
            screen.textContent = screen.textContent + this.textContent;
            args.push(this.textContent);
        }

    }
    else if(!screen.textContent.split('').some(n=> n=='.')){
        screen.textContent = screen.textContent + this.textContent;
        args.push(this.textContent);
    }
    
}

const clearAll = function(){
    screen.textContent = '';
    args =[];
}

const remove = function(){
    let copy = screen.textContent.split('');
    copy.pop();
    screen.textContent = copy.join('');
    args.pop();
}

function main (){
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(numbers => numbers.addEventListener('click', display));

    

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operators => operators.addEventListener('click',operator));

    const equal = document.querySelector('#equals');
    equal.addEventListener('click', calculate);

    const clear = document.querySelector('#clear');
    clear.addEventListener('click', clearAll );

    const dot = document.querySelector('#dot');
    dot.addEventListener('click',decimal);

    const deleteLast = document.querySelector('#backspace');
    deleteLast.addEventListener('click', remove);

    document.addEventListener('keydown',function(e){
        if(document.querySelector(`[data-number="${e.key}"]`)){
            document.querySelector(`[data-number="${e.key}"]`).click()
        }
        
    });
}

let args = [];
main();
