import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: () => ({
    body: {
      bg: '#eee',
      color: '#000',
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
