import { AlertTriangle } from 'lucide-react'

export default function ConfirmDialog({ open, onClose, onConfirm, title, message, confirmLabel = 'Confirm', loading = false }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      style={{ background: 'rgba(2, 6, 23, 0.55)' }}
    >
      <div className="w-full max-w-sm space-y-5 border border-border bg-card p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-errorLight p-2.5">
            <AlertTriangle size={22} strokeWidth={1.5} className="text-error" />
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-foreground">{title || 'Are you sure?'}</h3>
            {message && <p className="mt-1.5 text-sm leading-relaxed text-mutedForeground">{message}</p>}
          </div>
        </div>
        <div className="flex justify-end gap-2.5 pt-1">
          <button onClick={onClose} className="border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-borderHover">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="bg-error px-4 py-2 text-sm font-semibold text-accentForeground transition-colors hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? 'Deleting…' : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
