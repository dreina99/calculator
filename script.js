let buttonContainer = document.querySelector('#button-container')
let buttonLabels = [[7, 4, 1, 'C'], 
                    [8, 5, 2, 0],
                    [9, 6, 3, '.'],
                    ['+/-', 'x', '-', '+'],
                    ['\u2192', '÷', '=']]
let savedEq = document.querySelector('.save-eq')
let inputEq = document.querySelector('.input')

for (let i = 0; i < 5; i++) {
    // create column for buttons
    let column = document.createElement('div')
    column.classList.add('col')

    for (let j = 0; j < 4; j++) {
        // break for equals button
        if(i == 4 && j == 3) break
        
        // create button
        let button = document.createElement('button')
        if (i == 4 && j == 2) button.classList.add('equals')
        else button.classList.add('button')

        // create labels    
        let label = document.createElement('span')
        label.classList.add('button-label')
        label.innerHTML = buttonLabels[i][j]
        button.appendChild(label)

        column.appendChild(button)
    }
    buttonContainer.appendChild(column)
}

// capture event for buttons on page
let btns = document.querySelectorAll('.button')
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let btnLabel = btn.children[0].innerHTML
        console.log(btnLabel)
    })
})