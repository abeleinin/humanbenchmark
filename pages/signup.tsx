import {
  Flex,
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Divider,
  Alert
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { OAuthButtonGroup } from '../components/login/OAuthButtonGroup'
import { useAuth } from '../contexts/AuthContext'

function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const usernameRef = useRef<HTMLInputElement>()
  const emailRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const passwordConfirmRef = useRef<HTMLInputElement>()
  const { createUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await createUser(emailRef.current.value, passwordRef.current.value)
    } catch (e) {
      console.log(e)
      if (e.code == 'auth/weak-password') {
        setError('Password is too weak')
      } else if (e.code === 'auth/email-already-in-use') {
        setError('Email is already in use')
      } else {
        setError('Failed to create an account')
      }
    }
    setLoading(false)
  }

  return (
    <Flex py="4" align={'center'} justify={'center'}>
      <Container
        maxW="lg"
        py="8"
        px={{ base: '0', sm: '6' }}
        bg="#2b87d1"
        borderRadius="xl"
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} color="white">
              Sign up
            </Heading>
            {error && (
              <Alert status="error" borderRadius="xl">
                {error}
              </Alert>
            )}
          </Stack>
          <Box rounded={'lg'} bg="white" boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <FormControl id="userName" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" ref={usernameRef} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" ref={emailRef} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    ref={passwordRef}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword(showPassword => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="confirmPassword" isRequired>
                <FormLabel>Password Confirmation</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    ref={passwordConfirmRef}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword(showPassword => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  Sign up
                </Button>
              </Stack>
              <Text align={'center'}>
                Already a user?{' '}
                <Link href="/login" color={'blue.400'}>
                  Login
                </Link>
              </Text>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  )
}

export default Signup
