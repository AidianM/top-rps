const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const SELECTIONS = [
    {
        name: 'rock',
        emoji: '🪨',
        beats: 'scissors',
        category: 'all'
    },
    {
        name: 'paper',
        emoji: '📜',
        beats: 'rock',
        category: 'all'
    },
    {
        name: 'scissors',
        emoji: '✂️',
        beats: 'paper',
        category: 'all'
    },
    {
        name: 'xtina',
        emoji: '💖',
        beats: 'all'
    }
]


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
       const selectionName = selectionButton.dataset.selection
      const selection = SELECTIONS.find(selection => selection.name === selectionName)
       makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText)+1
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)


}

function isWinner(selection, opponentSelection){
   /* return selection.beats === opponentSelection.name */

    if (selection.name === 'xtina') {
       return selection.beats === opponentSelection.category
    } else {
        return selection.beats === opponentSelection.name
    }
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length-1)
    return SELECTIONS[randomIndex]
}

/*added cheat modes below*/

/* function cheating() {
    const div = document.createElement('div')
    div.innerText = xtina.emoji
    if (winner) div.classList.add('winner')
    finalColumn.after(div)

}*/