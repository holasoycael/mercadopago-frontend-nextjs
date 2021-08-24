import { useEffect, useRef, RefObject } from 'react'
import gsap from 'gsap'

import * as S from './styles'

import { ModalProps } from 'pages'

type OverloadProps = {
  useModal: ModalProps
  modalRef: RefObject<HTMLDivElement>
}

const Overload = ({ useModal, modalRef }: OverloadProps) => {
  const statusRef = useRef(false)

  useEffect(() => {
    const { status } = useModal
    if (statusRef.current && status) {
      gsap.to(modalRef.current, {
        duration: 0.2,
        autoAlpha: 1
      })
    } else {
      statusRef.current = true
    }
  }, [statusRef, modalRef, useModal])

  return (
    <S.Wrapper ref={modalRef} zIndex="10">
      <S.Content>
        <S.Main>
          <S.B1 />
          <S.B2 />
          <S.B3 />
        </S.Main>
      </S.Content>
    </S.Wrapper>
  )
}

export default Overload
