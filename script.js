let buttonContainer = document.querySelector('#button-container')

for (let i = 0; i < 4; i++) {
    let row = document.createElement('div')
    row.classList.add('row')
    /*for (let j = 0; j < 5; j++) {
        let button = document.createElement('div')
        // skip last button create (equals will take up two rows)
        //if(i == 3 && j == 4) break
        // create equal button
        if(i == 2 && j== 4) button.classList.add('equals')
        else button.classList.add('button')
        row.appendChild(button)
    }*/
    buttonContainer.appendChild(row)
}