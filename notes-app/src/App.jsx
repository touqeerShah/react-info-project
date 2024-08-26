import React, { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
// import { data } from "./data"
import Split from "react-split"
import { nanoid } from "nanoid"

/**
 * Challenge: Spend 10-20+ minutes reading through the code
 * and trying to understand how it's currently working. Spend
 * as much time as you need to feel confident that you 
 * understand the existing code (although you don't need
 * to fully understand everything to move on)
 */

export default function App() {
  // lazy inizatization help to run code and iniaize code only once when we add code like localStorage when every any state change on page the hole page is rerender and run this expensive code again and again.

  const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem("notes")) || [])
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  )

  useEffect(() => {

    localStorage.setItem("notes", JSON.stringify(notes));

  }, [notes])

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      notesName: "Note " + (notes.length + 1),
      createAt: Date.now(),
      updateAt: Date.now(),  // Set updateAt to the creation time

      body: "# Type your markdown note's title here"
    }
    console.log("newNote", newNote)
    setNotes(prevNotes => [newNote, ...prevNotes])

    setCurrentNoteId(newNote.id)
  }
  function deleteNote(event, noteId) {
    event.stopPropagation()
    const result = notes.filter((note) => note.id !=noteId);
    console.log("result ",result)
    setNotes(result)
    // Your code here
}
  function updateNote(text) {
    // this way is do without used sort and updateAt and createAt 
    //   setNotes(oldNotes => {
    //     const newArray = []
    //     for(let i = 0; i < oldNotes.length; i++) {
    //         const oldNote = oldNotes[i]
    //         if(oldNote.id === currentNoteId) {
    //             newArray.unshift({ ...oldNote, body: text })
    //         } else {
    //             newArray.push(oldNote)
    //         }
    //     }
    //     return newArray
    // })
    const updatedNotes = notes.map(oldNote => {
      return oldNote.id === currentNoteId
        ? {
          ...oldNote,
          notesName: text.split("\n")[0].replace(/#/g, "").trim(),
          updateAt: Date.now(),
          body: text
        }
        : oldNote;
    });

    // Then, sort the updated notes array by updateAt in descending order
    const sortedNotes = [...updatedNotes].sort((a, b) => b.updateAt - a.updateAt);

    // Finally, update the state with the sorted notes
    setNotes(sortedNotes);
    // const sortedNotes = [...notes].sort((a, b) => b.updateAt - a.updateAt);
    // console.log("sortedNotes",sortedNotes)
    // setNotes(sortedNotes)
    // localStorage.setItem("notes", JSON.stringify(notes));
  }

  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  return (
    <main>
      {
        notes.length > 0
          ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className="split"
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {
              currentNoteId &&
              notes.length > 0 &&
              <Editor
                currentNote={findCurrentNote()}
                updateNote={updateNote}
              />
            }
          </Split>
          :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className="first-note"
              onClick={createNewNote}
            >
              Create one now
            </button>
          </div>

      }
    </main>
  )
}
