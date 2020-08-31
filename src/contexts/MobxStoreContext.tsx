import React from "react"
import { useLocalStore } from "mobx-react-lite"
import { mobx as _mobx, Mobx } from "../mobx.config"

export const StoreContext = React.createContext<Mobx | null>(null)
export const StoreProvider = ({ children }: any) => {
  const mobx = useLocalStore(() => _mobx)
  return (
    <StoreContext.Provider value={mobx}>
      {children}
    </StoreContext.Provider>
  )
}
