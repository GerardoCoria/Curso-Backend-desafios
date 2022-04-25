const calculo = (data) => {
    let numeros = [];
    let num ={}
    for (let i = 0; i < data; i++) {
         numeros.push(Math.floor(Math.random() *(1000-1)+1));      
    }
    numeros.forEach(element => {
        num[element] = num[element]+1 || 1;
    });
    return num;
}
process.on('message', (data) => {
    const num = calculo(data);
    process.send(num);
})