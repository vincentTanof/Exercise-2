// Number 1
let number1:number = 25;

if (number1%2==1){
    console.log("Number is Odd");
} else {
    console.log("Number is Even");
}

// Number 2
function isPrime(num: number): boolean {
    
    if(num==1){
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        return false;
        }
    } ​

    return true;
}

console.log(isPrime(7));
console.log(isPrime(6));

// Number 3
function sumOfNum(num: number){

    let total = 0;
    let input = num;

    for(let i=0;i<num;i++){
        total += input;
        input--;
    }

    return total;
}

console.log(sumOfNum(5));
console.log(sumOfNum(3));

// Number 4
function factorial(num: number){
    
    let total = 1;
    let input = num;

    for (let i=0;i<num;i++){
        total *= input;
        input--;
    }

    return total;
}

console.log(factorial(4));
console.log(factorial(6));

// Number 5
function calculateValue (input: number) {
    if (input < 1) return 0;
    if (input < 2) return 1;
    return calculateValue(input - 2) + calculateValue(input - 1);
};

// 3
// calculateValue(3) => return calculateValue(1) + calculateValue(2)
//                   => return 1 + calculateValue(0) + calculateValue(1)    
//                   => return 1 + 0 + 1

console.log(calculateValue(3));
console.log(calculateValue(15));
//