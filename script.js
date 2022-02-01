const e = 2.712;
var fact=1;

const m = prompt("Masukkan rata-rata kota :");
const x = prompt("Masukkan peluang yg dicari :");

function factorial (x){
  if (x==0){
    return 1;
  } else {
    for(var i=1;i<=x;i++){
      fact=fact*i;    
  }
  return fact;
  }
}
console.log("m="+ m)

var p;
fact = factorial(x)
p = (Math.pow(e, -(m)) * Math.pow(m, x)) / fact;

console.log("peluang yang didapat = "+p)