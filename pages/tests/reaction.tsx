import { useState } from 'react'
import Board from '../../components/board'
import Titlescreen from '../../components/titlescreen'

function Reaction() {
  const [isOn, setIsOn] = useState(false)
  return (
    <Board>
      <Titlescreen
        title="Reaction Time"
        symbol="⚡️"
        button="Start"
        onStatusChange={setIsOn}
      >
        When th red box turns green, click as fast as you can.
      </Titlescreen>
    </Board>
  )
}

export default Reaction
