import { createContext, useContext } from 'react'

const defaultAuthValue = {
  hasPermission: () => false,
  loading: false,
}

const SharedUIAuthContext = createContext(defaultAuthValue)

export function SharedUIProvider({ value, children }) {
  const safeValue = value ? { ...defaultAuthValue, ...value } : defaultAuthValue
  return <SharedUIAuthContext.Provider value={safeValue}>{children}</SharedUIAuthContext.Provider>
}

export function useSharedUIAuth() {
  return useContext(SharedUIAuthContext)
}
