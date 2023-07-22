let buttonContainer = document.querySelector('#button-container')

for (let i = 0; i < 5; i++) {
    let column = document.createElement('div')
    column.classList.add('col')
    for (let j = 0; j < 4; j++) {
        if(i == 4 && j == 3) break
        let button = document.createElement('button')

        if (i == 4 && j == 2) button.classList.add('equals')
        else button.classList.add('button')

        column.appendChild(button)
    }
    buttonContainer.appendChild(column)
}