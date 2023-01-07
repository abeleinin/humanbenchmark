import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Gamecard = ({ children, name, symbol, to }) => {
  return (
    <Container>
      <Link to={to}>
        <Box
          w="30vw"
          h="30vh"
          textAlign="center"
          bg={useColorModeValue('#E6E6E6', '#545454')}
          color={useColorModeValue('gray.800', 'gray.200')}
          shadow="lg"
          borderRadius="lg"
          cursor="pointer"
          pt={8}
          _hover={{ bg: useColorModeValue('EAEAEA', '#454545') }}
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
