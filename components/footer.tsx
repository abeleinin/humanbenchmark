import { Center, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Center
      p={10}
      opacity={0.4}
      fontSize="sm"
      color={useColorModeValue('black', 'white')}
    >
      &copy; {new Date().getFullYear()} Abe Leininger. All Rights Reserved.{' '}
    </Center>
  )
}

export default Footer
