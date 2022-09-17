import { Button, SimpleGrid, Heading, Box } from '@chakra-ui/react'
import { Component, useState } from 'react'
import Board from '../../components/board'
import Titlescreen from '../../components/titlescreen'

function Sequence() {
  const [isOn, setIsOn] = useState(false)

  const numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

  const initPlay = {
    score: 1
  }

  async function tileClickHandle(number) {
    console.log(number)
  }

  if (isOn) {
    return (
      <Board>
        <Box>
          <Heading size="xl" py={4} color="blue.200">
            Level: {initPlay.score}
          </Heading>
          <SimpleGrid spacing="5" columns={{ md: 3 }}>
            {numberList &&
              numberList.map((v, i) => (
                <Button
                  key={v}
                  bg="white"
                  p="14"
                  rounded="md"
                  opacity="0.2"
                  _hover={{}}
                  onClick={() => tileClickHandle(v)}
                ></Button>
              ))}
          </SimpleGrid>
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
