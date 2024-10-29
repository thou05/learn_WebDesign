for(let i = 0; i <= 100; i++){
    console.log(i);
}

function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

let number = 29;
if(isPrime(number)){
    console.log(number + `la so nguyen to`);
}else{
    console.log(number + `khom la so nguyen to`);
}