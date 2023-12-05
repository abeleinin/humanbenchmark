import { useEffect, useState } from 'react'
import { Button, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Board from '../../components/board'
import Titlescreen from '../../components/titlescreen'

function OneToFifty() {
  const [isOn, setIsOn] = useState(false)
  const [isOver, setIsOver] = useState(false)
  const initPlay = {
    time: 0,
    numberListDisplay: [],
    numberListExtra: [],
    clicked: [],
    currentNumber: 1
  }

  const [play, setPlay] = useState(initPlay)

  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [playerScore, setPlayerScore] = useState(0)

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time => time + 0.01)
      }, 10)
    } else if (!isRunning && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning, time])

  useEffect(() => {
    if (isOn) {
      setIsRunning(true)
    }
  }, [isOn])

  useEffect(() => {
    const shuffle = array => {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }

    const numberList_1to25 = Array.from({ length: 25 }, (_, i) => i + 1)
    const numberList_26to50 = Array.from({ length: 25 }, (_, i) => i + 26)

    shuffle(numberList_1to25)
    shuffle(numberList_26to50)

    setPlay({
      ...play,
      numberListDisplay: numberList_1to25,
      numberListExtra: numberList_26to50
    })
  }, [isOn])

  async function tileClickHandle(number) {
    if (number === play.currentNumber && play.currentNumber != 50) {
      const copySequence = [...play.clicked]
      copySequence.push(number)
      if (number < 26) {
        for (let i = 0; i < play.numberListDisplay.length; i++) {
          if (play.numberListDisplay[i] === number) {
            play.numberListDisplay[i] = play.numberListExtra.pop()
          }
        }
      }
      setPlay({
        ...play,
        clicked: copySequence,
        currentNumber: play.currentNumber + 1
      })
    } else if (play.currentNumber == 50) {
      setPlayerScore(Math.round(time * 100) / 100)
      setPlay({ ...initPlay, time: time })
      setIsRunning(false)
      setTime(0)
      setIsOn(false)
      setIsOver(true)
    }
  }

  if (isOn) {
    return (
      <Board>
        <Box>
          <Box display={'flex'} justifyContent={'space-around'}>
            <Heading size="lg" py={4} color="blue.200" justifyItems={'left'}>
              Time:
            </Heading>
            <Heading
              size="lg"
              py={4}
              color="blue.200"
              width={'24'}
              justifyItems={'right'}
            >
              {Math.round(time * 100) / 100}
            </Heading>
          </Box>
          <SimpleGrid
            spacing="2"
            columns={{ md: 5 }}
            maxWidth="300"
            maxHeight="300"
          >
            {play.numberListDisplay &&
              play.numberListDisplay.map((v, _) => (
                <Button
                  // hidden={seenList.includes(v) ? true : false}
                  hidden={play.currentNumber > 50 ? true : false}
                  // size={'8'}
                  fontSize={'2xl'}
                  key={v}
                  colorScheme={v < 26 ? 'whiteAlpha' : 'pink'}
                  p="6"
                  rounded="md"
                  opacity={play.clicked.includes(v) ? '0' : '1'}
                  // flashTile === v.toString() ? '0' : '0.2'
                  _hover={{}}
                  onClick={() => tileClickHandle(v)}
                >
                  {v}
                </Button>
              ))}
          </SimpleGrid>
        </Box>
      </Board>
    )
  } else if (isOver) {
    return (
      <Board>
        <Box>
          <Heading size="xl" color="#fff" p={4}>
            1 to 50
          </Heading>
          <Heading size="2xl" color="#fff">
            Time: {playerScore}
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
          title="1 to 50"
          symbol="🔢"
          button="Start"
          onStatusChange={setIsOn}
        >
          Click the tiles from 1 to 50 as fast as possible!
        </Titlescreen>
      </Board>
    )
  }
}

export default OneToFifty
