// Inputs
const assignments = document.querySelector('#assignments')
const composer = document.querySelector('#composer')
const piece = document.querySelector('#piece')
const tempo = document.querySelector('#tempo')
const notes = document.querySelector('#notes')
let noteId = 0

const assignmentsArr = []  // for keeping track of the entire list


function addToList() {
  // Create new elements and containers for them
  const listItem = document.createElement('div')
  const composerEl = document.createElement('h3')
  const pieceEl = document.createElement('h2')
  const tempoEl = document.createElement('h3')
  const notesEl = document.createElement('h3')

  const buttonGroup = document.createElement('div')
  const deleteButton = document.createElement('button')
  const editButton = document.createElement('button')

  // Give classes to element containers
  listItem.className = 'list-item'
  listItem.id = `item-${noteId}`
  deleteButton.id = `delete-${noteId}`
  buttonGroup.className = 'item-buttons'

  // Set inner text of elements to be inputs
  composerEl.innerText = composer.value
  pieceEl.innerText = piece.value
  tempoEl.innerText = tempo.value
  notesEl.innerText = notes.value
  deleteButton.innerText = 'Delete'
  editButton.innerText = 'Edit'

  // Group elements together, and render them
  buttonGroup.append(deleteButton, editButton)
  listItem.append(composerEl, pieceEl, tempoEl, notesEl, buttonGroup)
  assignments.append(listItem)

  // Add event listeners to buttons
  deleteButton.addEventListener('click', (e) => removeFromList(e.target))

  // Add item to assignments array
  assignmentsArr.push({
    id: noteId,
    composer: composer.value, 
    piece: piece.value, 
    tempo: tempo.value,
    notes: notes.value
  })

  // Clear inputs
  assignments.value = null
  composer.value = null
  piece.value = null
  tempo.value = null
  notes.value = null

  // Increment the ID
  noteId++
}


function removeFromList(el) {
  const id = +el.id.split('').splice(7).join('')
  document.getElementById(`item-${id}`).remove()
  const index = assignmentsArr.findIndex(item => item.id === id)
  assignmentsArr.splice(index, 1)
}
