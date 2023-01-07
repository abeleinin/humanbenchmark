import {
  Center,
  Container,
  Box,
  Heading,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import Footer from '../components/footer'
import Gamecard from '../components/gamecard'
import Titlescreen from '../components/titlescreen'

function Home() {
  return (
    <Box h="100%">
      <Center w="100%" h="95%">
        <Box
          display="flex"
          p={2}
          mb={6}
          textAlign="center"
          justifyContent="center"
        >
          <Titlescreen
            title="Cognitive Caliber"
            symbol="🃞"
            button="Get Started"
            onStatusChange=""
          >
            Measure your Cognitive Caliber by completing memorization and brain
            games!
          </Titlescreen>
        </Box>
      </Center>
      <Container maxW={'full'}>
        <Wrap mx="100px" spacingX="5px" spacingY="30px" justify="center" py={8}>
          <WrapItem>
            <Gamecard name="Sequence Memory" symbol="🧠" to="/tests/sequence">
              Remember an increasingly long pattern of button presses.
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="1 to 50" symbol="🔢" to="/tests/one-to-fifty">
              Click the tiles from 1 to 50 as fast as possible!
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="Mental Math" symbol="🔢" to="/tests/mental-math">
              Solve as many mental math equations as fast as possible!
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="Reaction Time" symbol="⚡️" to="/tests/reaction">
              Coming soon!
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="Aim Trainer" symbol="🎯" to="/">
              Coming soon!
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="Number Memory" symbol="🔢" to="/tests/number">
              Coming soon!
            </Gamecard>
          </WrapItem>
          <WrapItem>
            <Gamecard name="Verbal Memory" symbol="🗣" to="/">
              Coming Soon!
            </Gamecard>
          </WrapItem>
        </Wrap>
      </Container>
      <Footer />
    </Box>
  )
}

export default Home
