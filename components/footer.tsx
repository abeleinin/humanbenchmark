import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box textAlign="center" p={10} opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Abe Leininger. All Rights Reserved.{' '}
    </Box>
  )
}

export default Footer
