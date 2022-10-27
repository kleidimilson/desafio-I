

function reverse(frase:string){
    let novafrase:string = "";
    
    let i = frase.length-1
    while(i>=0){
        novafrase = novafrase + frase[i];
        i--;
    }
    return novafrase;
}

console.log(reverse('kleidimilson'))


