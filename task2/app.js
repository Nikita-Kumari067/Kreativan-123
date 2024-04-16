//////////1,4,9,16,25,36,49



for(let i=1; i<=7; i++){
    console.log(i*i);
};


///////////8,64,216,512,1000

for(let i=2; i<=6; i++){
    // console.log(i*i*i);

    if(i==2){
        console.log(2**3);

    }
    else if (i==3){
        console.log(4**3);
    }
    else if(i==4){
        console.log(6**3);
    }
    else if(i==5){
        console.log(8**3);
    }
    else{
        console.log(10**3);
    }
};


/////1,4,27,16,125,36,343,64,729

for(let i=1; i<=9; i++){
    if(i===3){

        console.log(i*i*i);
    }
    else if(i===5){
        console.log(i*i*i);
    }
    else if(i===7){
        console.log(i*i*i);
    }
    else if(i===9){
        console.log(i*i*i);
    }
    else{
        console.log(i*i);
    }
}