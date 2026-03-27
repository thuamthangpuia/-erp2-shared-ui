export function flatToPolicy(flatKeys) {
  const policy = {}
  if (!Array.isArray(flatKeys)) return policy
  for (const key of flatKeys) {
    if (typeof key !== 'string') continue
    const [resource, action] = key.split(':')
    if (!resource || !action) continue
    if (!policy[resource]) policy[resource] = []
    policy[resource].push(action)
  }
  return policy
}

export function hasAction(policy, resource, action) {
  if (!policy || !resource || !action) return false
  const actions = policy[resource]
  if (!actions || !actions.length) return false
  if (actions.includes('admin')) return true
  return actions.includes(action)
}

export function getActions(policy, resource) {
  if (!policy || !resource) return []
  return policy[resource] || []
}
