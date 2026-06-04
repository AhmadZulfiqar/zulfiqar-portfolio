function fib(n){
    let n1=0;n2=1;nt=0;
    while(n1<n){
        nt=n1+n2;
        n1=n2;
        n2=nt;
    }
    if(n1==n||n==0){
        console.log(n+" is a Fibonacci number");
    }
    else{
        console.log(n+" is not a Fibonacci number");
    }
}
fib(8);
fib(10);
