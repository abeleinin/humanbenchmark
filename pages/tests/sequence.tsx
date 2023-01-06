import { Button, SimpleGrid, Heading, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useDB } from '../../contexts/DatabaseContext'
import Board from '../../components/board'
import Titlescreen from '../../components/titlescreen'
import timeout from '../../components/util'
import Level from '../../components/level'

function Sequence() {
  const [isOn, setIsOn] = useState(false)
  const [isOver, setIsOver] = useState(false)
  const numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  const initPlay = {
    isDisplay: false,
    userTurn: false,
    score: 0,
    tileSequence: [],
    userGuess: [],
    prevTile: ''
  }

  const [play, setPlay] = useState(initPlay)
  const [flashTile, setFlashTile] = useState('')
  const [playerScore, setPlayerScore] = useState(0)

  const { currentUser } = useAuth()
  const { updateData } = useDB()

  // Turn on game
  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisplay: true })
    } else {
      setPlay(initPlay)
      updateData(currentUser.uid, 'sequence', playerScore)
    }
  }, [isOn])

  // Select next tile in sequence
  useEffect(() => {
    if (isOn && play.isDisplay) {
      let tileID = Math.floor(Math.random() * 9)
      if (
        play.tileSequence.length > 0 &&
        numberList[tileID] === play.prevTile
      ) {
        if (tileID === 8) {
          tileID = 0
        } else {
          tileID++
        }
      }
      let newTile = numberList[tileID]
      const copySequence = [...play.tileSequence]
      copySequence.push(newTile)
      setPlay({ ...play, prevTile: newTile, tileSequence: copySequence })
    }
  }, [isOn, play.isDisplay])

  // Display sequence of tiles
  useEffect(() => {
    if (isOn && play.isDisplay && play.tileSequence.length) {
      displayTiles()
    }
  }, [isOn, play.isDisplay, play.tileSequence.length])

  async function displayTiles() {
    await timeout(500)
    for (let i = 0; i < play.tileSequence.length; i++) {
      await timeout(300)
      setFlashTile(play.tileSequence[i])
      await timeout(300)
      setFlashTile('')

      if (i === play.tileSequence.length - 1) {
        const copyTiles = [...play.tileSequence]
        setPlay({
          ...play,
          isDisplay: false,
          userTurn: true,
          userGuess: copyTiles.reverse()
        })
      }
    }
  }

  async function tileClickHandle(number) {
    if (!play.isDisplay && play.userTurn) {
      const copyTiles = [...play.userGuess]
      const lastColor = copyTiles.pop()
      setFlashTile(number.toString())

      if (number.toString() === lastColor) {
        if (copyTiles.length) {
          setPlay({ ...play, userGuess: copyTiles })
        } else {
          setPlay({
            ...play,
            isDisplay: true,
            userTurn: false,
            score: play.tileSequence.length,
            userGuess: []
          })
        }
      } else {
        await timeout(200)
        setPlayerScore(play.score)
        setPlay({
          ...initPlay,
          score: play.tileSequence.length
        })
        setIsOn(false)
        setIsOver(true)
      }
      await timeout(200)
      setFlashTile('')
    }
  }

  if (isOn) {
    return (
      <Board>
        <Box>
          <Level>{play.score}</Level>
          <SimpleGrid spacing="5" columns={{ md: 3 }}>
            {numberList &&
              numberList.map((v, i) => (
                <Button
                  key={v}
                  bg="white"
                  p="14"
                  rounded="md"
                  opacity={flashTile === v ? '1' : '0.2'}
                  _hover={{}}
                  onClick={() => tileClickHandle(v)}
                ></Button>
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
            Sequnce Memory
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
          title="Sequence Memory"
          symbol="🧠"
          button="Start"
          onStatusChange={setIsOn}
        >
          Remember the sequence of tiles!
        </Titlescreen>
      </Board>
    )
  }
}

export default Sequence
