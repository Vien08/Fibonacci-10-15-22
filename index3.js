// let x = 0 ; 
// for ( x; x <= 10; x++)
//     {
//         console.log(x);
//     }




// const printEven = function() {
//     var getEven = [13, 23, 12, 45, 22 ,48, 66, 100, 102, 109, 120];

//     for ( let i= 0 ; i < getEven.length; i++){
//         if (getEven[i] % 2 == 0){
//             document.write(getEven[i] + "&nbsp;" + "&nbsp;");
//         }
//     }
// };

// printEven();


function fibonacci(n) {
    var n1 = 0 ;
    var n2 = 1 ;
    var i = 0 ;
    var n3 ;
     
    while (i < n){
        n3 = n1 + n2 ;
        console.log(n3) ; 
        n1 = n2 ;
        n2 = n3 ;
        i++ ;
    }
}
fibonacci(8);
