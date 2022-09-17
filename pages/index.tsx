import { Center, Text, Box, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import Gamecard from '../components/gameCard'

const Page = () => {
  return (
    <Box h="100%">
      <Center w="100%" h="70%" bg="#2b87d1" m={0} p={0}>
        <Box
          display="flex"
          borderRadius="lg"
          p={4}
          mb={6}
          textAlign="center"
          justifyContent="center"
        >
          <Heading color="#fff" size="4xl">
            Human Benchmark <br />
            <Heading size="md">
              Measure your abilities with brain games and cognitive tests.
            </Heading>
          </Heading>
        </Box>
      </Center>
      <Wrap spacing="30px" justify="center" py={8}>
        <WrapItem>
          <Gamecard
            name="Sequence Memory"
            text="test test tes"
            href="/sequence"
            path="/sequence"
          ></Gamecard>
        </WrapItem>
        <WrapItem>
          <Gamecard
            name="Reaction Time"
            text="test test tes"
            href="/sequence"
            path="/sequence"
          ></Gamecard>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export default Page
