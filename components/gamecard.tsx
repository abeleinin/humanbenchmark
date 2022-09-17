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
          pt={8}
          _hover={{ boxShadow: 'outline' }}
        >
          <Heading size="2xl">{symbol}</Heading>
          <Heading size="lg" mx={4} mt={4}>
            {name}
          </Heading>
          <Text p={2} fontSize="14pt">
            {children}
          </Text>
        </Box>
      </NextLink>
    </Container>
  )
}

export default Gamecard
