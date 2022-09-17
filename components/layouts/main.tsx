import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Human Benchmark</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxWidth="100%" h="100vh" pt={14} pl={0} pr={0}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
