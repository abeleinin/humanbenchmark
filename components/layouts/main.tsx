import Head from 'next/head'
import { Box, Center, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cognitive Caliber</title>
      </Head>

      <Navbar />

      <Center maxWidth="100%" h="100vh" m="0">
        {children}
      </Center>
    </Box>
  )
}

export default Main
