let i = 1;
let factorial = 1;
while (i<=16) {
    factorial = i * factorial;
    i++;
    console.log(factorial);
    if (i > 10) {
        break;
    }
    
}