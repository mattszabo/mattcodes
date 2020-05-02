import React, { useEffect, useRef, useCallback, useState } from 'react'

const initialPos = { x: 0, y: 0 }
let offsetX = 0
let offsetY = 0
const Draggable = ({ children }) => {
  const ref = useRef(null)
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const [state, setState] = useState({
    origin: initialPos
  })

  const handleMouseMove = useCallback(event => {
    const { clientX, clientY } = event
    const x = clientX - state.origin.x - offsetX
    const y = clientY - state.origin.y - offsetY
    setLeft(x)
    setTop(y)
  }, [state.origin])

  const handleMouseUp = useCallback(() => {
    ref.current.removeEventListener('mouseup', handleMouseUp)
    ref.current.removeEventListener('mousemove', handleMouseMove)

    setState({
      origin: initialPos
    })
  }, [handleMouseMove])

  const handleMouseDown = useCallback(event => {
    const { clientX, clientY } = event
    const rect = ref.current.getBoundingClientRect()
    offsetX = clientX - rect.left
    offsetY = clientY - rect.top
    setState({
      origin: { x: clientX, y: clientY }
    })
    ref.current.addEventListener('mouseup', handleMouseUp)
    ref.current.addEventListener('mousemove', handleMouseMove)
  }, [handleMouseUp, handleMouseMove])

  useEffect(() => {
    const el = ref.current
    el.addEventListener('mousedown', handleMouseDown)

    return () => {
      el.removeEventListener('mousedown', handleMouseDown)
    }
  }, [ref, handleMouseDown])

  const style = {
    position: 'relative',
    top: `${top}px`,
    left: `${left}px`,
    maxWidth: '100%'
  }

  return <div ref={ref} style={style}>
    {children}
  </div>
}

export default Draggable
