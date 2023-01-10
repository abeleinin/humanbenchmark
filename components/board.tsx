import { Box, Center, useColorModeValue } from '@chakra-ui/react'
const Board = ({ children }) => {
  return (
    <Center w="100%" h="100%" bg={useColorModeValue('#fbf1c7', '#282828')}>
      <Box
        display="flex"
        p={2}
        mb={6}
        textAlign="center"
        justifyContent="center"
      >
        {children}
      </Box>
    </Center>
  )
}

export default Board
