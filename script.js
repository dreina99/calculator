let buttonContainer = document.querySelector('#button-container')
let buttonLabels = [[7, 4, 1, 'C'], 
                    [8, 5, 2, 0],
                    [9, 6, 3, '.'],
                    ['+/-', 'x', '-', '+'],
                    ['\u2192', '÷', '=']]
let savedEq = document.querySelector('.save-eq')
let inputEq = document.querySelector('.input')

// add buttons to calculator
for (let i = 0; i < 5; i++) {
    // create column for buttons
    let column = document.createElement('div')
    column.classList.add('col')

    for (let j = 0; j < 4; j++) {
        // break for equals button
        if(i == 4 && j == 3) break
        
        // create button
        let button = document.createElement('button')
        button.classList.add('button')

        // create labels    
        let label = document.createElement('span')
        label.classList.add('button-label')
        label.innerHTML = buttonLabels[i][j]

        // categorize buttons
        if(buttonLabels[i][j] == 'C') button.classList.add('clear')
        else if(buttonLabels[i][j] == '.') button.classList.add('decimal')
        else if(buttonLabels[i][j] == '+/-') button.classList.add('negative')
        else if(buttonLabels[i][j] == 'x') button.classList.add('mult')
        else if(buttonLabels[i][j] == '-') button.classList.add('minus')
        else if(buttonLabels[i][j] == '+') button.classList.add('plus')
        else if(buttonLabels[i][j] == '\u2192') button.classList.add('backspace')
        else if(buttonLabels[i][j] == '÷') button.classList.add('divide')
        else if(buttonLabels[i][j] == '=') {
            button.classList.add('equals')
            button.classList.remove('button')
        } else button.classList.add('number')

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
        
        if(btn.classList.contains('clear')) {
            inputEq.innerHTML = '0'
            savedEq.innerHTML = ''
        } else if (btn.classList.contains('number')) {
            let currInput = inputEq.innerHTML
            
            // number in input cannot be greater than 12
            // check uses 11 because it is pre append
            if(currInput.length > 11)
                return 0

            if(currInput == '0')
                if(btnLabel == '0')
                    return 0
                else 
                    inputEq.innerHTML = btnLabel
            else
                inputEq.innerHTML += btnLabel
        }
    })
})