import { useState, useEffect } from "react"

export function useTimer(initialTime) {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setIsRunning(false)
    }
    return () => clearInterval(interval)
  }, [isRunning, time])

  const startTimer = () => setIsRunning(true)
  const stopTimer = () => setIsRunning(false)
  const resetTimer = () => {
    setIsRunning(false)
    setTime(initialTime)
  }

  return { time, isRunning, startTimer, stopTimer, resetTimer }
}

