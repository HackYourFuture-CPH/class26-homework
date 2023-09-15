// Save a note
let notes = [];
function saveNote(content, id) {
  notes.push({ content: content, id: id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Polish your shoes", 3);
console.log(notes);


//Get a note
function getNote(id) {
  for(i=0; i< notes.length; i++){
    if(notes[i].id === id) {
      return notes[i];
    }
   }
   return "Error";
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


//Log out note
function logOutNotesFormatted() {
  for(i=0; i< notes.length-1; i++){
  console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
  }
}
 logOutNotesFormatted(); 



// Adding the feature "Priority"
let note = [];
function saveNote(content, id, priority) {
  notes.push({ content: content, id: id, priority: priority });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Polish your shoes", 3);

function logOutNotesFormatted() {
  for (i = 0; i < note.length; i++) {
    console.log(`The note with id ${note[i].id} (Priority: ${note[i].priority}) has the following note text: ${note[i].content}`);
  }
}

function setNotePriority(id, priority) {
  for (i = 0; i < note.length; i++) {
    if (note[i].id === id) {
      note[i].priority = priority;
      return;
    }
  }
}

function filterNotesByPriority(priority) {
  const filteredNotes = note.filter((note) => note.priority === priority);
  return filteredNotes;
}
