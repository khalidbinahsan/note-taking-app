import { Trash2, Pencil } from 'lucide-react';
export default function NoteCard({note, onDelete, onEdit}) {
  const categoryStyles = {
    personal: {
      card: "bg-blue-50 border-blue-100",
      badge: "bg-blue-100 text-blue-700", 
    },
    work: {
      card: "bg-amber-50 border-amber-100",
      badge: "bg-amber-100 text-amber-700",
    },
    urgent: {
      card: "bg-red-50 border-red-100",
      badge: "bg-red-100 text-red-700",
    },
    ideas: {
      card: "bg-purple-50 border-purple-100",
      badge: "bg-purple-100 text-purple-700",
    },
  };

  const selectedStyle = categoryStyles[note?.noteType?.toLowerCase()] || {
    card: "bg-white border-slate-200",
    badge: "bg-slate-100 text-slate-600"
  };

  return (
    <div className={`group relative p-5 ${selectedStyle.card} rounded-2xl shadow-sm hover:shadow-md transition-all border`}>
      
      <div className="pr-12">
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide mb-3 ${selectedStyle.badge}`}>
          {note.noteType}
        </span>
        <p className="text-slate-800 leading-relaxed font-medium">
          {note.title}
        </p>
      </div>

      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button onClick={onEdit} className="p-2 bg-white/60 hover:bg-white text-slate-400 hover:text-blue-600 rounded-xl transition-colors cursor-pointer shadow-sm">
          <Pencil size={18} />
        </button>
        <button onClick={onDelete} className="p-2 bg-white/60 hover:bg-white text-slate-400 hover:text-red-500 rounded-xl transition-colors cursor-pointer shadow-sm">
          <Trash2 size={18} />
        </button>
      </div>

      <div className="mt-10 pt-3 border-t border-black/5 flex justify-between items-center">
        <span className="text-[11px] text-slate-400 font-medium">{note.time}</span>
      </div>
    </div>
  );
}