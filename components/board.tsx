import { Box, Center } from '@chakra-ui/react'
const Board = ({ children }) => {
  return (
    <Center w="100%" h="70%" bg="#2b87d1">
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
