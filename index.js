const assignments = document.querySelector('#assignments')
const composer = document.querySelector('#composer')
const piece = document.querySelector('#piece')
const tempo = document.querySelector('#tempo')
const notes = document.querySelector('#notes')

function addToList() {
  const listItem = document.createElement('div')
  const composerEl = document.createElement('h3')
  const pieceEl = document.createElement('h2')
  const tempoEl = document.createElement('h3')
  const notesEl = document.createElement('h3')
  const deleteButton = document.createElement('button')
  const editButton = document.createElement('button')

  listItem.className = 'list-item'
  
  composerEl.innerText = composer.value
  pieceEl.innerText = piece.value
  tempoEl.innerText = tempo.value
  notesEl.innerText = notes.value
  deleteButton.innerText = 'Delete'
  editButton.innerText = 'Edit'

  listItem.append(composerEl, pieceEl, tempoEl, notesEl, deleteButton, editButton)
  assignments.append(listItem)
}

function removeFromList() {
  
}