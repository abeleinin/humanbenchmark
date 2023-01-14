import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Center
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Gamecard = ({ children, name, symbol, to }) => {
  return (
    <Center
      w={{ base: '80vw', md: '60vw' }}
      textAlign="center"
      bg={useColorModeValue('#f2e5bc', '#1d2021')}
      color={useColorModeValue('gray.800', 'gray.200')}
      shadow="lg"
      borderRadius="lg"
      cursor="pointer"
      justifyContent="left"
      _hover={{ bg: useColorModeValue('#f5e4ae', '#454545') }}
    >
      <Flex ml="50">
        <Heading size="2xl">{symbol}</Heading>
      </Flex>
      <Flex direction="column" alignContent="left">
        <Heading size="lg" mx={4}>
          {name}
        </Heading>
        <Text p={2} fontSize="14pt">
          {children}
        </Text>
      </Flex>
    </Center>
  )
}

export default Gamecard
