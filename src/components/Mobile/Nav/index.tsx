import { TextIndent, TextOutdent } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Profile } from '../../Profile'

import { Container, ContainerNav, ButtonOpen } from './styles'

interface INavMobileProps {
  nested?: JSX.Element
}

export function Nav(props: INavMobileProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const [parentRef] = useAutoAnimate<HTMLDivElement>()
  const navRef = useRef<HTMLDivElement>(null)

  const { nested } = props

  useEffect(() => {
    setIsRendered(true)
  }, [])

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    }
    if (!isVisible) {
      document.body.style.overflow = 'visible'
    }
  }, [isVisible])

  function handleOpenNav() {
    setIsVisible(true)
  }

  function handleCloseNav() {
    setIsVisible(false)
  }

  if (!isRendered) {
    return null
  }

  return createPortal(
    <>
      {!isVisible && (
        <ButtonOpen onClick={handleOpenNav}>
          <TextIndent size={32} />
        </ButtonOpen>
      )}

      {isVisible && (
        <Container
          ref={parentRef}
          onClick={(e) => {
            e.stopPropagation()
            handleCloseNav()
          }}
        >
          <ContainerNav ref={navRef} onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseNav}>
              <TextOutdent size={32} />
            </button>
            <div ref={parentRef}>
              <Profile />
              {nested}
            </div>
          </ContainerNav>
        </Container>
      )}
    </>,
    document.body
  )
}
