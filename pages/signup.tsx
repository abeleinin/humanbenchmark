import {
  Center,
  Box,
  useColorModeValue,
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
import { useRef, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { OAuthButtonGroup } from '../components/login/OAuthButtonGroup'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useDB } from '../contexts/DatabaseContext'

function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const usernameRef = useRef<HTMLInputElement>()
  const emailRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const passwordConfirmRef = useRef<HTMLInputElement>()
  const { createUser } = useAuth()
  const { setData } = useDB()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    // Sign in
    try {
      setError('')
      setLoading(true)
      const uid = await createUser(
        emailRef.current.value,
        passwordRef.current.value
      )
      await setData(uid, usernameRef.current.value, emailRef.current.value)
      navigate('/')
    } catch (e) {
      if (e.code == 'auth/weak-password') {
        setError('Password is too weak')
      } else if (e.code === 'auth/email-already-in-use') {
        setError('Email is already in use')
      } else {
        setError(e.code)
      }
    }
    setLoading(false)
  }

  return (
    <Box
      h={{ base: 'full', md: '90%' }}
      w={{ base: '100vw', md: '70vw' }}
      m={{ base: '0', md: 'auto' }}
      maxW={{ base: '100%', md: 'lg' }}
      py={{ base: '0', md: '8' }}
      px={{ base: '0', sm: '6' }}
      borderRadius="xl"
      bg={useColorModeValue('#f2e5bc', '#1d2021')}
      color={useColorModeValue('gray.200', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} color="white">
            Sign Up
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
    </Box>
  )
}

export default Signup
