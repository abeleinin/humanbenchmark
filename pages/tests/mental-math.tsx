import { useEffect, useState } from 'react'
import { Box, Heading, Textarea, Button } from '@chakra-ui/react'
import Board from '../../components/board'
import Level from '../../components/level'
import Titlescreen from '../../components/titlescreen'

function MentalMath() {
  const [isOn, setIsOn] = useState(false)
  const [isOver, setIsOver] = useState(false)
  let [value, setValue] = useState('')

  const initPlay = {
    score: 0,
    numberOne: getRandom(),
    numberTwo: getRandom()
  }

  const [play, setPlay] = useState(initPlay)

  const [time, setTime] = useState(30)
  const [isRunning, setIsRunning] = useState(false)
  const [playerScore, setPlayerScore] = useState(0)

  useEffect(() => {
    if (isOn) {
      setIsRunning(true)
    }
  }, [isOn])

  function getRandom() {
    return Math.floor(Math.random() * 10 + 2)
  }

  useEffect(() => {
    let interval = null
    if (isRunning) {
      if (time < 0) {
        setPlayerScore(play.score)
        setPlay(initPlay)
        setTime(30)
        setIsRunning(false)
        setIsOn(false)
        setIsOver(true)
      }
      interval = setInterval(() => {
        setTime(time => time - 1)
      }, 1000)
    } else if (!isRunning && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning, time])

  async function handleInputChange(e) {
    let inputValue = e.target.value
    setValue(inputValue)
    let answer = play.numberOne * play.numberTwo
    if (inputValue == answer) {
      setPlay({
        ...play,
        numberOne: getRandom(),
        numberTwo: getRandom(),
        score: play.score + 1
      })
      setValue('')
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  if (isOn) {
    return (
      <Board>
        <Box>
          <Box>
            <Level>{play.score}</Level>
            <Heading size="lg" py={2} color="blue.200" justifyItems={'left'}>
              Time: {time}
            </Heading>
          </Box>
          <Box display="flex" alignItems="center">
            <Box>
              <Heading>
                {play.numberOne} x {play.numberTwo} =
              </Heading>
            </Box>
            <Box p="4">
              <Textarea
                value={value}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                placeContent="center"
                width="40"
                fontSize="4xl"
                resize="none"
              />
            </Box>
          </Box>
        </Box>
      </Board>
    )
  } else if (isOver) {
    return (
      <Board>
        <Box>
          <Heading size="xl" color="#fff" p={4}>
            Mental Math
          </Heading>
          <Heading size="2xl" color="#fff">
            Level: {playerScore}
          </Heading>
          <Button
            mt={10}
            bg="yellow.400"
            onClick={() => {
              setIsOn(true), setIsOver(false)
            }}
          >
            Play again
          </Button>
        </Box>
      </Board>
    )
  } else {
    return (
      <Board>
        <Titlescreen
          title="Mental Math"
          symbol="🔢"
          button="Start"
          onStatusChange={setIsOn}
        >
          Solve the simple times tables as fast as possible!
        </Titlescreen>
      </Board>
    )
  }
}
export default MentalMath
