const Palindromo=(cadena)=> {
    let cadenaProcesada = cadena.replace(/\s/g, '').toLowerCase();
    
    return cadenaProcesada === cadenaProcesada.split('').reverse().join('');
}

console.log(Palindromo("RECONOCER")); 
console.log(Palindromo("BYTE")); 

