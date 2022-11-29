import { useState } from 'react'
import { Button, SimpleGrid } from '@chakra-ui/react'
import Board from '../../components/board'

function OneToFifty() {
  const numberList = Array.from({ length: 25 }, (_, i) => i + 1)
  const [flashTile, setFlashTile] = useState('')

  return (
    <Board>
      <SimpleGrid spacing="3" columns={{ md: 5 }}>
        {numberList &&
          numberList.map((v, i) => (
            <Button
              key={v}
              bg="white"
              p="12"
              rounded="md"
              opacity={flashTile === v ? '1' : '0.2'}
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
