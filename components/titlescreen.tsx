import { Heading } from '@chakra-ui/react'
import { Box, Button } from '@chakra-ui/react'

const Titlescreen = ({ children, title, symbol, button, delay = 0 }) => (
  <Box fontSize="24px" color="#fff">
    <Heading size="4xl" my={4}>
      {symbol}
    </Heading>
    <Heading size="4xl" my={4}>
      {title}
    </Heading>
    {children}
    <br />
    <Button bg="yellow.400" _hover={{ bg: 'yellow.300' }} my={4} color="#000">
      {button}
    </Button>
  </Box>
)

export default Titlescreen
