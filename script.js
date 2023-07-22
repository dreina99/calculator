let buttonRow = document.querySelectorAll('.row')
console.log(buttonRow[0])
for(let i = 0; i < 5; i++) {
    let button = document.createElement('div')
    button.classList.add('button')
    buttonRow[0].appendChild('button')

}