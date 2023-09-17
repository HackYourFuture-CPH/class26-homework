const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

function getNote(id) {
  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }

  console.log("Error: No note found with this ID.");
}

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: "${note.content}"`
    );
  }
}


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Remember to do your HYF Homework", 3);

const firstNote = getNote(10);
console.log(firstNote);

logOutNotesFormatted();


//unique feature : Being able to add the note registration dates