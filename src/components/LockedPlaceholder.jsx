import { Lock } from 'lucide-react'

export default function LockedPlaceholder({ reason, requiredPermissions, className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-border ${className}`}>
      <div className="absolute inset-0 z-10 flex min-h-[120px] flex-col items-center justify-center gap-3 bg-background/60 backdrop-blur-sm">
        <Lock className="h-8 w-8 shrink-0 text-mutedForeground" />
        <p className="px-4 text-center text-sm font-medium text-mutedForeground">
          {reason || "You don't have access to this feature"}
        </p>
        <p className="px-4 text-center text-xs text-mutedForeground/70">Contact your administrator for access</p>
        {requiredPermissions?.length > 0 && (
          <p className="text-xs text-mutedForeground/60">Required: {requiredPermissions.join(', ')}</p>
        )}
      </div>
      <div className="pointer-events-none min-h-[120px] select-none blur-sm filter" aria-hidden="true" />
    </div>
  )
}
