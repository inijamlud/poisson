function poisson() {
    

    const e = 2.712;
    var fact = 1;

    const m = document.getElementById("rata").value
    const x = document.getElementById("peluang").value
    var hasil = document.getElementById("hasil")


    function factorial(x) {
        if (x == 0) {
            return 1;
        } else {
            for (var i = 1; i <= x; i++) {
                fact = fact * i;
            }
            return fact;
        }
    }
    
    var p;
    fact = factorial(x)
    p = (Math.pow(e, -(m)) * Math.pow(m, x)) / fact;
    hasil.value = p;
    
    // console.log("m=" + m)
    // console.log("peluang yang didapat = " + p)

}