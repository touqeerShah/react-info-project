import PropTypes from 'prop-types';

export default function Sidebar({ notes, currentNote, setCurrentNoteId, newNote, deleteNote }) {
    const noteElements = notes.map((note) => (
        <div key={note.id}>
            <div

                className={`title ${note.id === currentNote.id ? "selected-note" : ""
                    }`}
                onClick={() => setCurrentNoteId(note.id)}

            >
                <h4 className="text-snippet">{note.notesName}</h4>
                <button
                    id="al"
                    aria-label="delete-btn"
                    className="delete-btn"
                    onClick={() => { deleteNote( note.id) }}

                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
Sidebar.propTypes = {
    notes: PropTypes.array.isRequired,
    currentNote: PropTypes.object.isRequired,
    setCurrentNoteId: PropTypes.func.isRequired,
    newNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,

};