import React, { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
// import { data } from "./data"
import Split from "react-split"
// import { nanoid } from "nanoid"
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./utils/firebase"
/**
 * Challenge: Spend 10-20+ minutes reading through the code
 * and trying to understand how it's currently working. Spend
 * as much time as you need to feel confident that you 
 * understand the existing code (although you don't need
 * to fully understand everything to move on)
 */

export default function App() {
  // lazy inizatization help to run code and iniaize code only once when we add code like localStorage when every any state change on page the hole page is rerender and run this expensive code again and again.

  const [notes, setNotes] = React.useState([])
  const [currentNoteId, setCurrentNoteId] = React.useState(
    ""
  )
  const [tempNoteText, setTempNoteText] = React.useState("")

  const currentNote =
    notes.find(note => note.id === currentNoteId)
    || notes[0]

  useEffect(() => {
    if (!currentNoteId) {
      setCurrentNoteId(notes[0]?.id)
    }
  }, [notes])

  useEffect(() => {
    if (currentNote) {
      setTempNoteText(currentNote?.body)
    }
  }, [currentNote])

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      // Sync up our local notes array with the snapshot data
      console.log("snapshot", snapshot.docs)
      const notesArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      const sortedNotes = [...notesArr].sort((a, b) => b.updateAt - a.updateAt);

      setNotes(sortedNotes)
    })
    return unsubscribe
  }, [])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tempNoteText !== currentNote.body) {
        updateNote(tempNoteText)
      }
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [tempNoteText])
  async function createNewNote() {
    const newNote = {
      notesName: "Note " + (notes.length + 1),
      createAt: Date.now(),
      updateAt: Date.now(),  // Set updateAt to the creation time
      body: "# Type your markdown note's title here"
    }

    const newNoteRef = await addDoc(notesCollection, newNote)

    setCurrentNoteId(newNoteRef.id)
  }
  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId)
    await deleteDoc(docRef)


    // Your code here
  }
  async function updateNote(text) {
    // this way is do without used sort and updateAt and createAt 
    //   setNotes(oldNotes => {
    //     const newArray = []
    //     for(let i = 0; i < oldNotes.length; i++) {
    //         const oldNote = oldNotes[i]
    //         if(oldNot e.id === currentNoteId) {
    //             newArray.unshift({ ...oldNote, body: text })
    //         } else {
    //             newArray.push(oldNote)
    //         }
    //     }
    //     return newArray
    // })
    // solution two 
    // const updatedNotes = notes.map(oldNote => {
    //   return oldNote.id === currentNoteId
    //     ? {
    //       ...oldNote,
    //       notesName: text.split("\n")[0].replace(/#/g, "").trim(),
    //       updateAt: Date.now(),
    //       body: text
    //     }
    //     : oldNote;
    // });

    // // Then, sort the updated notes array by updateAt in descending order
    // const sortedNotes = [...updatedNotes].sort((a, b) => b.updateAt - a.updateAt);
    // // Finally, update the state with the sorted notes
    // setNotes(sortedNotes);

    // run with firewall
    const docRef = doc(db, "notes", currentNoteId)

    await setDoc(docRef, {
      body: text,
      notesName: text.split("\n")[0].replace(/#/g, "").trim(),
      updateAt: Date.now()
    }, { merge: true })

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
              currentNote={currentNote}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {
              tempNoteText &&
              <Editor
                tempNoteText={tempNoteText}
                updateNote={setTempNoteText}
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
