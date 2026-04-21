import { useState } from 'react'
import NoteCard from './components/NoteCard';
function App() {
const [noteTitle, setNoteTitle] = useState('');
const [noteType, setNoteType] = useState('');
const [notes, setNotes] = useState([]);
const [editMode, setEditMode] = useState(false);
const [editableNote, setEditableNote] = useState(null);
const changeTitleHandler = (e) => {
  setNoteTitle(e.target.value);
}
const changeTypeHandler = (e) => {
  setNoteType(e.target.value);
}
const submitHandler = (e) => {
  e.preventDefault();
  editMode ? updateHandler() : createHandler();
}
const createHandler = () => {
  const newNote = {
    id: Date.now(),
    title: noteTitle,
    noteType: noteType,
    time: new Date().toLocaleString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        })
  }
  setNotes([newNote, ...notes]);
  setNoteTitle('');
}
const updateHandler = () => {
    const updatedNotes = notes.map((note)=> {
      if(note.id === editableNote.id) {
        return {...note, title: noteTitle, noteType: noteType}
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditMode(false);
    setNoteTitle('');
}
const deleteHandler = (noteId) => {
  const filteredNote = notes.filter(note => note.id !== noteId);
  setNotes(filteredNote);
}
const editHandler = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
    setNoteType(note.noteType);
}
  return (
    <div className='container py-6 xl:py-[60px] 2xl:py-[80px]'>
      {/* --- Form Section --- */}
      <section className="mb-12">
        <h1 className="text-2xl 2xl:text-4xl lg:text-3xl font-bold text-fuchsia-600 text-center capitalize">
        Note creator
      </h1>
        <form 
         onSubmit={submitHandler}
          className="flex flex-col gap-4 max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border border-slate-200 mt-10"
        >
          <h2 className="text-xl font-bold text-slate-800">New Note</h2>
          <select
            onChange={changeTypeHandler}
            value={noteType}
            id="note-type"
            required
            className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 cursor-pointer appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          >
            <option value="" disabled>Choose a category...</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="urgent">Urgent</option>
            <option value="ideas">Ideas</option>
          </select>
          <input
            onChange={changeTitleHandler}
            value={noteTitle}
            type="text"
            required
            placeholder="What's on your mind?"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors cursor-pointer"
          >
            {editMode ? "Update Note" : "Add Note"}
          </button>
        </form>
        <div className='mt-20'>
          <h3 className='text-2xl font-bold'>Total notes({notes.length})</h3>
          <hr className='mt-4 border-t border-slate-100'/>
          </div>

        {notes.length === 0 ? (
          <p className="text-center text-slate-500 mt-10">No notes available. Please add some notes.</p>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {
            notes.map(note => (
              <NoteCard 
              key={note.id} 
              note={note}
              onDelete={() => deleteHandler(note.id)}
              onEdit={() => editHandler(note)}
              >              
              </NoteCard>
            ))
          }
        </div>
        )}
      </section>
    </div>
  )
}

export default App
