import LockedPlaceholder from './LockedPlaceholder'
import { useSharedUIAuth } from '../context/SharedUIProvider'

export default function PermissionGate({ permission, children, fallback = null, mode = 'hide', reason }) {
  const { hasPermission, loading } = useSharedUIAuth()

  if (loading) return null

  const perms = Array.isArray(permission) ? permission : [permission]
  const allowed = perms.length === 0 || hasPermission(...perms)

  if (allowed) return children
  if (mode === 'hide') return fallback
  if (mode === 'disable') {
    return (
      <div className="pointer-events-none cursor-not-allowed opacity-50" title={reason || 'Insufficient permissions'}>
        {children}
      </div>
    )
  }
  if (mode === 'lock') {
    return <LockedPlaceholder reason={reason} requiredPermissions={perms} />
  }
  return fallback
}
