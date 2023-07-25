let buttonContainer = document.querySelector('#button-container')
let buttonLabels = [[7, 4, 1, 'C'], 
                    [8, 5, 2, 0],
                    [9, 6, 3, '.'],
                    ['+/-', 'x', '-', '+'],
                    ['\u2192', '÷', '=']]
let savedEq = document.querySelector('.save-eq')
let inputEq = document.querySelector('.input')
let opVals = []

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
        else if(buttonLabels[i][j] == 'x' ||
                buttonLabels[i][j] == '-' ||
                buttonLabels[i][j] == '+' ||
                buttonLabels[i][j] == '÷') button.classList.add('op')
        else if(buttonLabels[i][j] == '\u2192') button.classList.add('backspace')
        else if(buttonLabels[i][j] == '=') {
            button.classList.add('equals')
            button.classList.remove('button')
        } else button.classList.add('number')

        button.appendChild(label)
        column.appendChild(button)
    }
    buttonContainer.appendChild(column)
}

let performCalculation = () => {
    let num1 = opVals[0]
    let eqOp = opVals[1]
    let num2 = opVals[2]

    // check divide by 0
    if (eqOp == '÷' && num2 == 0) {
        opVals.pop()
        alert("Silly goose, you can't divide by 0")
        return null
    } else if (eqOp == '+')
        return num1 + num2
    else if (eqOp == 'x')
        return num1 * num2
    else if (eqOp == '+')
        return num1 + num2
    else return num1 - num2
}

// capture event for buttons on page
let btns = document.querySelectorAll('.button')
let lastClick = ""
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let btnLabel = btn.children[0].innerHTML
        let currInput = inputEq.innerHTML
        
        // clear was clicked
        if(btn.classList.contains('clear')) {
            inputEq.innerHTML = '0'
            savedEq.innerHTML = ''
            opVals = []
            lastClick = 'clear'
        // number handler
        } else if (btn.classList.contains('number')) {            
            // number in input cannot be greater than 12
            if(currInput.length > 11)
                return 0

            // handle leading 0 error
            if(currInput == '0')
                if(btnLabel == '0')
                    return 0
                else 
                    inputEq.textContent = btnLabel
            // op last clicked -> start new number
            else if (lastClick == 'op')
                inputEq.textContent = btnLabel;
            // append digit to number
            else
                inputEq.textContent += btnLabel
            
            lastClick = 'number'
        // backspace handler
        } else if (btn.classList.contains('backspace')) {
            if(currInput.length == 1) inputEq.innerHTML = 0
            else inputEq.innerHTML = inputEq.innerHTML.slice(0, inputEq.innerHTML.length - 1)
            lastClick = 'backspace'
        } else if (btn.classList.contains('op')) {
            // store values for first operation
            if(opVals.length == 0) {
                opVals.push(Number(inputEq.textContent))
                opVals.push(btnLabel)
            // update operator case
            } else if (lastClick == 'op') {
                opVals[1] = btnLabel
            // retrieved number op number -> perform calculation
            } else if (lastClick == 'number') {
                opVals.push(Number(inputEq.textContent))
                let result = performCalculation()
                // not a divide by 0 error
                if(result != null)
                    opVals[0] = result
                    opVals[1] = btnLabel
            }

            savedEq.textContent = `${opVals[0]} ${opVals[1]}`
            lastClick = 'op'
        }
    })
})