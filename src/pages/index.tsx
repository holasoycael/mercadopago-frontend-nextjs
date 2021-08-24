import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

import TemplateHome from 'templates/Home'
import Overload from '../components/Overload'

import ElementProvider from 'contexts/Index'

export type ModalProps = {
  status?: boolean
}

function Index() {
  const statusRef = useRef(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const [useModal, setModal] = useState<ModalProps>({})

  useEffect(() => {
    const { status } = useModal
    if (statusRef.current && status === false) {
      gsap.to(modalRef.current, {
        duration: 0.5,
        autoAlpha: 0
      })
    } else {
      statusRef.current = true
    }
  }, [useModal])

  return (
    <ElementProvider {...{ useModal, setModal }}>
      <TemplateHome />
      <Overload {...{ useModal, modalRef }} />
    </ElementProvider>
  )
}

export default Index
