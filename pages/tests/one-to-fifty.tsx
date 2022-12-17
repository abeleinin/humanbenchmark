import { useState } from 'react'
import { Button, flexbox, SimpleGrid } from '@chakra-ui/react'
import Board from '../../components/board'
import timeout from '../../components/util'

function OneToFifty() {
  const [flashTile, setFlashTile] = useState('')

  const numberList = Array.from({ length: 25 }, (_, i) => i + 1)
  const [seenList, setSeenList] = useState([])
  const [currentNumber, setCurrentNumber] = useState(1)

  async function tileClickHandle(number) {
    if (number === currentNumber) {
      const copySequence = [...seenList]
      copySequence.push(number)
      setSeenList(copySequence)
      setCurrentNumber(currentNumber + 1)
    } else {
      setFlashTile(number.toString())
      await timeout(200)
      setFlashTile('')
    }
  }

  return (
    <Board>
      <SimpleGrid spacing="3" columns={{ md: 5 }}>
        {numberList &&
          numberList.map((v, i) => (
            <Button
              // hidden={seenList.includes(v) ? true : false}
              size={'8'}
              key={v}
              bg="white"
              p="8"
              rounded="md"
              opacity={seenList.includes(v) ? '0' : '0.2'}
              // flashTile === v.toString() ? '0' : '0.2'
              _hover={{}}
              onClick={() => tileClickHandle(v)}
            >
              {v}
            </Button>
          ))}
      </SimpleGrid>
    </Board>
  )
}

export default OneToFifty
