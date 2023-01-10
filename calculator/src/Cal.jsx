function add(a,b){
    let sum=a+b;
    return sum;
}

function sub(a,b){
    let minus=a-b;
    return minus;
}
function mul(a,b){
    let mul=a*b;
    return mul;
}
function divi(a,b){
    let div=a/b;
    div =div.toFixed(2);
    return div;
}
export {add,sub,mul,divi};