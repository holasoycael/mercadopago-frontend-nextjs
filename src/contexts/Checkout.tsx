import { createContext, useContext, Dispatch, SetStateAction } from 'react'

import { ProfileProps, SectionProps } from 'templates/Home'

export interface InstallmentsItemProps {
  installments: number
  recommended_message: string
}

type WithChildren = { children?: React.ReactNode }
type ProviderProps = WithChildren & CheckoutProps
export interface CheckoutProps {
  useSection: SectionProps
  setSection: Dispatch<SetStateAction<SectionProps>>
  useProfile: ProfileProps
  setProfile: Dispatch<SetStateAction<ProfileProps>>
  useInstallments: InstallmentsItemProps[]
  setInstallments: Dispatch<SetStateAction<InstallmentsItemProps[]>>
  useTerms: boolean
  setTerms: Dispatch<SetStateAction<boolean>>
}

const ElementContext = createContext<CheckoutProps>(null!)

export default function ElementProvider({
  children,
  useSection,
  setSection,
  useProfile,
  setProfile,
  useInstallments,
  setInstallments,
  useTerms,
  setTerms
}: ProviderProps) {
  return (
    <ElementContext.Provider
      value={{
        useSection,
        setSection,
        useProfile,
        setProfile,
        useInstallments,
        setInstallments,
        useTerms,
        setTerms
      }}
    >
      {children}
    </ElementContext.Provider>
  )
}

export function SnapshotSection() {
  const context = useContext(ElementContext)
  const { useSection, setSection } = context
  return { useSection, setSection }
}

export function SnapshotProfile() {
  const context = useContext(ElementContext)
  const { useProfile, setProfile } = context
  return { useProfile, setProfile }
}

export function SnapshotInstallments() {
  const context = useContext(ElementContext)
  const { useInstallments, setInstallments } = context
  return { useInstallments, setInstallments }
}

export function SnapshotTerms() {
  const context = useContext(ElementContext)
  const { useTerms, setTerms } = context
  return { useTerms, setTerms }
}
