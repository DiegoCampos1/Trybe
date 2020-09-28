// print a pyramid of asteriks

let n = 9;
let blankSpaceInit = ''; blankSpaceMid = ' ';
let asterisk = '';
let middle = parseInt(n / 2);  // defines the middle of the first asterisk

if(n % 2 == 1){
    for(let i=0; i<=middle; i++){  
        for(let j=i; j<=middle; j++){ 
            blankSpaceInit += ' ';
        }
        asterisk = '*'

        if(i == 0){  // the first loop print only one asterisk
            console.log(blankSpaceInit + asterisk)
            blankSpaceInit = '';
        }
        else{  // from the second asterisk till the one before last, print blankspaces, asterisk, blankspaces in the middle and last asterisk
            if(i < middle){
            console.log(blankSpaceInit + asterisk + blankSpaceMid + asterisk)
            blankSpaceInit = '';
            blankSpaceMid += '  '; 
            }
            else{  // the base of pyramid print n asterisks
                for(let k=1; k<n; k++)
                    asterisk += "*";
                console.log(blankSpaceInit + asterisk)
            }
        }
    }
}else
    console.log('The base of the pyramid has to be an odd value')