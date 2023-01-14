import Head from 'next/head'
import { Box, Center } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-signin-client_id"
          content="377694841570-cuh9m9lumn7gp1su4l1ui1cae32ue4lk.apps.googleusercontent.com"
        />
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
