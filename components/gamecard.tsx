import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Gamecard = ({ children, name, symbol, to }) => {
  return (
    <Container>
      <Link to={to}>
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
      </Link>
    </Container>
  )
}

export default Gamecard
