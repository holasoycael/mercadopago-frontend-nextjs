import { createContext, useContext, Dispatch, SetStateAction } from 'react'

import { ModalProps } from 'pages'

type WithChildren = { children?: React.ReactNode }
type ProviderProps = WithChildren & ContextProps
export interface ContextProps {
  useModal: ModalProps
  setModal: Dispatch<SetStateAction<ModalProps>>
}

const ElementContext = createContext<ContextProps>(null!)

export default function ElementProvider({
  children,
  useModal,
  setModal
}: ProviderProps) {
  return (
    <ElementContext.Provider
      value={{
        useModal,
        setModal
      }}
    >
      {children}
    </ElementContext.Provider>
  )
}

export function SnapshotModal() {
  const context = useContext(ElementContext)
  const { useModal, setModal } = context
  return { useModal, setModal }
}
