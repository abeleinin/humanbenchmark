import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'

const GameCard = ({ name, text, href, path }) => {
  return (
    <Container>
      <Center
        w="300px"
        h="300px"
        textAlign="center"
        bg="#ffffff"
        shadow="md"
        borderRadius="lg"
        cursor="pointer"
      >
        <Heading size="lg" m={4}>
          {name}
        </Heading>
        <Text>{text}</Text>
      </Center>
    </Container>
  )
}

export default GameCard
