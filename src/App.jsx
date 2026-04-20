import { useState } from 'react'
import NoteCard from './components/NoteCard';
function App() {
const [noteTitle, setNoteTitle] = useState('');
const [noteType, setNoteType] = useState('');
const [notes, setNotes] = useState(['This is a sample note. Feel free to add your own!', 'Click on a note to edit it.']);
const [editMode, setEditMode] = useState(false);
const [editableNote, setEditableNote] = useState(null);

  return (
    <div className='container py-6 xl:py-[60px] 2xl:py-[80px]'>
      {/* --- Form Section --- */}
      <section className="mb-12">
        <h1 className="text-2xl 2xl:text-4xl lg:text-3xl font-bold text-fuchsia-600 text-center capitalize">
        Note creator
      </h1>
        <form 
         
          className="flex flex-col gap-4 max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border border-slate-200 mt-10"
        >
          <h2 className="text-xl font-bold text-slate-800">New Note</h2>
          <select
            id="note-type"
            required
            className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 cursor-pointer appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          >
            <option value="" disabled selected>Choose a category...</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="urgent">Urgent</option>
            <option value="ideas">Ideas</option>
          </select>
          <input
            type="text"
            required
            placeholder="What's on your mind?"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors cursor-pointer"
          >
            Add Note
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
            <NoteCard></NoteCard>
        </div>
      </section>
    </div>
  )
}

export default App
