function integer(num){
    a = 2;
    b = 5;
    if( a > num){
        console.log("less");
    }else{
        console.log(b);
    }
}
integer(10);


function checkValue(num){
    var a = 0;
    var b = 1;
    for (i = 0; i< num; i++){
        if (i === 0){
            console.log( 0 + " " + "is even");
            continue;
        }
        if(i ===1){
           console.log(1 + " " + "is odd");
           continue;
        }
       if (a +=2 ){
           console.log(a + " " + "is even");
    
       }
        if( b +=2){
           console.log(b + " " + "is odd" );
       }
    }
}
checkValue(20);

function multiple(num){

    for (i = 0; i < num; i++){
        if (i % 3 && i % 5){
            console.log("FizzBuzz");
            continue;
        }
       if (i % 3){
           console.log("fizz");
           continue;

       }
       if (i % 5){
           console.log("buzz");
           continue;
           
       }
       
    }   

}
multiple(100);