import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  MutableRefObject
} from 'react'

import { OpacityProps } from 'components/Checkout'

export interface InstallmentsItemProps {
  installments: number
  recommended_message: string
}

type WithChildren = { children?: React.ReactNode }
type ProviderProps = WithChildren & CheckoutProps
export interface CheckoutProps {
  useCard: boolean
  setCard: Dispatch<SetStateAction<boolean>>
  useOpacity: OpacityProps
  setOpacity: Dispatch<SetStateAction<OpacityProps>>
  formRef: MutableRefObject<HTMLFormElement>
}

const ElementContext = createContext<CheckoutProps>(null!)

export default function ElementProvider({
  children,
  useCard,
  setCard,
  useOpacity,
  setOpacity,
  formRef
}: ProviderProps) {
  return (
    <ElementContext.Provider
      value={{
        useCard,
        setCard,
        useOpacity,
        setOpacity,
        formRef
      }}
    >
      {children}
    </ElementContext.Provider>
  )
}

export function SnapshotCard() {
  const context = useContext(ElementContext)
  const { useCard, setCard } = context
  return { useCard, setCard }
}

export function SnapshotOpacity() {
  const context = useContext(ElementContext)
  const { useOpacity, setOpacity } = context
  return { useOpacity, setOpacity }
}

export function SnapshotRef() {
  const context = useContext(ElementContext)
  const { formRef } = context
  return { formRef }
}
