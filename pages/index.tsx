import { Center, Text, Box, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import Gamecard from '../components/gamecard'
import Titlescreen from '../components/titlescreen'

const Page = () => {
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
          >
            Measure your abilities with brain games and cognitive tests.
          </Titlescreen>
        </Box>
      </Center>
      <Wrap mx="100px" spacingX="5px" spacingY="20px" justify="center" py={8}>
        <WrapItem>
          <Gamecard name="Sequence Memory" symbol="🧠" href="/tests/sequence">
            Remember an increasingly long pattern of button presses.
          </Gamecard>
        </WrapItem>
        <WrapItem>
          <Gamecard name="Reaction Time" symbol="⚡️" href="/">
            Coming soon!
          </Gamecard>
        </WrapItem>
        <WrapItem>
          <Gamecard name="Aim Trainer" symbol="🎯" href="/">
            Coming soon!
          </Gamecard>
        </WrapItem>
        <WrapItem>
          <Gamecard name="Number Memory" symbol="🔢" href="/">
            Coming soon!
          </Gamecard>
        </WrapItem>
        <WrapItem>
          <Gamecard name="Verbal Memory" symbol="🗣" href="/sequence">
            Coming Soon!
          </Gamecard>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export default Page
