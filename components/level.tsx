import { Heading, useColorModeValue } from '@chakra-ui/react'

const Level = ({ children }) => {
  return (
    <Heading size="xl" py={4} color={useColorModeValue('gray.800', 'gray.200')}>
      Level: {children}
    </Heading>
  )
}

export default Level
