import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
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
