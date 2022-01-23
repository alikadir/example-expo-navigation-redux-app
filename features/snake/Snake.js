import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Canvas from 'react-native-canvas'
import { changeDimensions } from './snakeSlice.js'

export default function Snake () {
  const canvasRef = useRef()
  const dispatch = useDispatch()
  const { positionList, canvasWidth, canvasHeight } = useSelector(
    (state) => state.snake
  )

  const { width, height } = Dimensions.get('window')

  useEffect(() => {
    dispatch(changeDimensions(width, height))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    initCanvas(canvas, canvasWidth, canvasHeight)
  }, [canvasRef])

  useEffect(() => {
    const canvas = canvasRef.current
    renderCanvas(canvas, positionList)
  }, [canvasRef, positionList])

  const initCanvas = (canvas, cWidth, cHeight) => {
    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.fillStyle = '#8e1600'
    ctx.fillRect(0, 0, cWidth, cHeight)
  }
  const renderCanvas = (canvas, list) => {
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    list.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y)
      else ctx.lineTo(p.x, p.y)
    })
    ctx.stroke()
  }

  return <Canvas ref={canvasRef} />
}
