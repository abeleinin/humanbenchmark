import {
  Center,
  Container,
  Box,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import Footer from '../components/footer'
import Gamecard from '../components/gamecard'
import Titlescreen from '../components/titlescreen'

function Home() {
  return (
    <Box h="100%">
      <Center w="100%" h="70%" bg="#2b87d1">
        <Box
          display="flex"
          p={2}
          mb={6}
          textAlign="center"
          justifyContent="center"
        >
          <Titlescreen
            title="Human Benchmark"
            symbol="⚡️"
            button="Get Started"
            onStatusChange=""
          >
            Measure your abilities with brain games and cognitive tests.
          </Titlescreen>
        </Box>
      </Center>
      <Container maxW={'full'}>
        <Wrap mx="100px" spacingX="5px" spacingY="30px" justify="center" py={8}>
          <WrapItem>
            <Gamecard name="Visual Memory" symbol="👀" to="/tests/visual-memory">
              Remember the pattern of squares.
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="Sequence Memory" symbol="🧠" to="/tests/sequence">
              Remember an increasingly long pattern of squares.
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="1 to 50" symbol="🔢" to="/tests/one-to-fifty">
              Click the tiles from 1 to 50 as fast as possible!
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="Mental Math" symbol="🧮" to="/tests/mental-math">
              Solve as many mental math equations in 30 seconds!
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="Number Memory" symbol="🚧" to="/">
              Coming soon!
            </Gamecard>
          </WrapItem>
        </Wrap>
      </Container>
      <Footer />
    </Box>
  )
}

export default Home
