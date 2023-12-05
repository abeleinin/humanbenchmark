import { useCallback } from 'react'
import { Heading } from '@chakra-ui/react'
import { Box, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Titlescreen = ({
  children,
  title,
  symbol,
  button,
  onStatusChange,
  delay = 0.2
}) => {
  const changeGame = useCallback(
    event => {
      onStatusChange(true)
    },
    [onStatusChange]
  )
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay }}
    >
      <Box fontSize="24px" color="#fff">
        <Heading size="4xl" my={4}>
          {symbol}
        </Heading>
        <Heading size="4xl" my={4}>
          {title}
        </Heading>
        {children}
        <br />
        <Button
          bg="yellow.400"
          _hover={{ bg: 'yellow.300' }}
          my={4}
          color="#000"
          fontSize="14pt"
          onClick={changeGame}
        >
          {button}
        </Button>
      </Box>
    </motion.div>
  )
}

export default Titlescreen
