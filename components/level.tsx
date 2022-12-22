import { Heading } from '@chakra-ui/react'

const Level = ({ children }) => {
  return (
    <Heading size="xl" py={4} color="blue.200">
      Level: {children}
    </Heading>
  )
}

export default Level
