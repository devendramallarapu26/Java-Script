var output = [];
var inc=1;
function fizzBuzz() {
    if(inc%5==0 && inc%3==0){
        output.push("FizzBuzz")
    }
    else if(inc%5==0){
        output.push("Bizz");
    }
   else if(inc%3==0){
        output.push("Fizz");
    }
    else{
        output.push(inc)
    }
    inc = inc +1
    console.log(output)
}
