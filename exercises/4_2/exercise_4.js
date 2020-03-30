let n = 9;
let inline = "";
if (n>1){
    for (let i=1; i <= n; i+=2){
        inline += " ";

            for (let j=1; j<=i; j+=1){

                inline += "*";
                }    
                inline += " \n";

        }
        console.log(inline);
} else console.log("Entre com um número maior que 1");