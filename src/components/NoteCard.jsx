import { Trash2, Pencil } from 'lucide-react';
export default function NoteCard() {
  return (
<>
        {/* Single Note Card */}
  <div className="group relative p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
    
    {/* Note Content */}
    <div className="pr-12">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Personal</h4>
      <p className="text-slate-700 leading-relaxed">
        Buy groceries and finish the React project by tomorrow evening.
      </p>
    </div>

    {/* Action Buttons (Visible on Hover) */}
    <div className="absolute top-4 right-4 flex flex-col gap-2 group-hover:opacity-100 transition-opacity duration-200">
      <button className="p-2 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-colors cursor-pointer">
        <Pencil size={18} />
      </button>
      <button className="p-2 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-colors cursor-pointer">
        <Trash2 size={18} />
      </button>
    </div>

    {/* Footer Detail */}
    <div className="mt-4 pt-3 border-t border-slate-50 flex justify-between items-center">
      <span className="text-[11px] text-slate-400 font-medium">April 20, 2026</span>
    </div>
  </div>
  </>
    )
}