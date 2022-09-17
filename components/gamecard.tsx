import NextLink from 'next/link'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'

const Gamecard = ({ children, name, symbol, href }) => {
  return (
    <Container>
      <NextLink href={href}>
        <Box
          w="300px"
          h="250px"
          textAlign="center"
          bg="#ffffff"
          shadow="md"
          borderRadius="lg"
          cursor="pointer"
          pt={5}
        >
          <Heading size="2xl">{symbol}</Heading>
          <Heading size="lg" m={4}>
            {name}
          </Heading>
          <Text p={3}>{children}</Text>
        </Box>
      </NextLink>
    </Container>
  )
}

export default Gamecard
