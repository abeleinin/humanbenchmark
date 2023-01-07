import { useCallback } from 'react'
import { Heading, useColorModeValue } from '@chakra-ui/react'
import { Box, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

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
      <Box fontSize="24px" color={useColorModeValue('gray.800', 'gray.200')}>
        <Heading size="4xl" my={4}>
          {symbol}
        </Heading>
        <Heading size="4xl" my={4}>
          {title}
        </Heading>
        {children}
        <br />
        <Button
          bg={useColorModeValue('gray.600', '#fbf1c7')}
          _hover={{ opacity: '90%' }}
          my={4}
          color={useColorModeValue('gray.200', 'gray.800')}
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
