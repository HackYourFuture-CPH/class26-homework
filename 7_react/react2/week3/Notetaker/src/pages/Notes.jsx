import { useState } from "react";
import CreateNote from "../components/CreateNote";
import Note from "../components/Note";
import Search from "../components/Search";
import { v4 as uuidv4 } from "uuid";


export default function Notes () {
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState("")
    
    const deleteNote = (id) => {
        setNotes(notes.filter((n) => n.id !== id));
        
   }
      
   const addNote = (text) => {
    const newNote = {
        text,
        date: new Date(),
        id: uuidv4() 
    };
    setNotes(prev => [...prev, newNote]);
};
    return (
        <div className="flex flex-col gap-5 my-8 w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto">
            <Search handleSearchChange={setSearch} />
            <CreateNote handleSaveNote={addNote} />
            
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {notes.length === 0 ? (
                <div className="empty-notes-wrapper">
                    You don't have any notes yet...
                </div>) : (
                    notes
                    .filter(n => n.text.includes(search))
                    .map(n => (
                        <Note text={n.text} date={n.date} id={n.id} deleteNote={deleteNote}  />
                    ))
                )}
            </div>
        </div>
    )
}