export default function InlineAlert({ message, type = 'info', onClose }) {
  if (!message) return null

  const styles = {
    success: 'bg-successLight border-success/20 text-success',
    error: 'bg-errorLight border-error/20 text-error',
    warning: 'bg-warningLight border-warning/20 text-warning',
    info: 'bg-infoLight border-info/20 text-info',
  }

  const classes = styles[type] || styles.info

  return (
    <div className={`flex items-start justify-between border px-4 py-3 ${classes}`}>
      <div className="text-sm">{message}</div>
      {onClose && (
        <button type="button" onClick={onClose} className="ml-4 text-sm font-medium underline">
          Dismiss
        </button>
      )}
    </div>
  )
}
