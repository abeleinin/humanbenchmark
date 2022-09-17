import { Box } from '@chakra-ui/react'
import Board from '../../components/board'
import Titlescreen from '../../components/titlescreen'

const Sequence = () => {
  return (
    <Board>
      <Titlescreen title="Sequence Memory" symbol="🧠" button="Start">
        Remember the sequence of tiles!
      </Titlescreen>
    </Board>
  )
}

export default Sequence
