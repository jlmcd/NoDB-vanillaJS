// Inputs
const assignments = document.querySelector('#assignments')
const composer = document.querySelector('#composer')
const piece = document.querySelector('#piece')
const tempo = document.querySelector('#tempo')
const notes = document.querySelector('#notes')
let noteId = 0

const assignmentsArr = [] // for keeping track of the entire list

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
  editButton.id = `edit-${noteId}`
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
  deleteButton.addEventListener('click', e => removeFromList(e.target))
  editButton.addEventListener('click', e => toggleEdit(e.target))

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
  // take the id from button
  const id = +el.id
    .split('')
    .splice(7)
    .join('')

  // use the id to get the item with the same id and remove it
  document.getElementById(`item-${id}`).remove()

  // use the id to find the item in the array with the same id and remove it
  const index = assignmentsArr.findIndex(item => item.id === id)
  return assignmentsArr.splice(index, 1)
}

function toggleEdit(el) {
  // take the id from button
  const id = +el.id
    .split('')
    .splice(5)
    .join('')

  // select item, all the existing headings
  const item = document.getElementById(`item-${id}`)
  const composerHeading = document.getElementById(`item-${id}`).children[0]
  const pieceHeading = document.getElementById(`item-${id}`).children[1]
  const tempoHeading = document.getElementById(`item-${id}`).children[2]
  const notesHeading = document.getElementById(`item-${id}`).children[3]

  // change edit button to save button
  const buttonContainer = document.getElementById(`item-${id}`).children[4]
  const editButton = document.getElementById(`item-${id}`).children[4]
    .children[1]
  const saveButton = document.createElement('button')
  saveButton.innerText = 'Save'
  saveButton.id = editButton.id
  saveButton.addEventListener('click', e => save(e.target))
  buttonContainer.replaceChild(saveButton, editButton)

  // create input fields
  const composerField = document.createElement('input')
  const pieceField = document.createElement('input')
  const tempoField = document.createElement('input')
  const notesField = document.createElement('input')

  // populate input fields with heading data
  composerField.value = composerHeading.innerText
  pieceField.value = pieceHeading.innerText
  tempoField.value = tempoHeading.innerText
  notesField.value = notesHeading.innerText

  // replace headings with input fields
  item.replaceChild(composerField, composerHeading)
  item.replaceChild(pieceField, pieceHeading)
  item.replaceChild(tempoField, tempoHeading)
  item.replaceChild(notesField, notesHeading)
}

function save(el) {
  const id = +el.id
    .split('')
    .splice(5)
    .join('')
  
  // Select all the inputs

  // Create new object of edited data
  const editedItem = {
    id: id,
    composer: composer.value,
    piece: piece.value,
    tempo: tempo.value,
    notes: notes.value
  }

  // add new object to the array
  const index = assignmentsArr.findIndex(item => item.id === id)
  assignmentsArr.splice(index, 1, editedItem)
}
