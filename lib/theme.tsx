import { extendTheme, useColorModeValue } from '@chakra-ui/react'

const styles = {
  global: props => ({
    body: {
      bg: useColorModeValue('#fbf1c7', '#282828'),
      color: useColorModeValue('gray.200', 'gray.800'),
      minW: '100%',
      minH: '100vh',
      margin: '0 auto'
    }
  })
}

const theme = extendTheme({
  styles
})

export default theme
