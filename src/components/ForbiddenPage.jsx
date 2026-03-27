import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, Mail } from 'lucide-react'

export default function ForbiddenPage({ requiredPermissions = [] }) {
  const navigate = useNavigate()
  const perms = Array.isArray(requiredPermissions) ? requiredPermissions : (requiredPermissions ? [requiredPermissions] : [])
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-8 text-center">
      <div className="rounded-full bg-muted p-4">
        <Lock className="h-12 w-12 text-mutedForeground" />
      </div>
      <div className="space-y-2">
        <h1 className="text-xl font-semibold">You don&apos;t have permission to view this page</h1>
        <p className="max-w-md text-sm text-mutedForeground">
          Your account does not have the required access. Contact your administrator if you believe this is an error.
        </p>
        {perms.length > 0 && <p className="mt-2 text-xs text-mutedForeground/80">Required: {perms.join(', ')}</p>}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
        {supportEmail ? (
          <a
            href={`mailto:${supportEmail}?subject=Access%20request`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-accentForeground hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Contact Support
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-accentForeground">
            <Mail className="h-4 w-4" />
            Contact your administrator
          </span>
        )}
      </div>
    </div>
  )
}
