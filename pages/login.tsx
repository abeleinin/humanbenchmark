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
  Alert,
  Link,
  Divider,
  Checkbox
} from '@chakra-ui/react'
import { useState, useRef } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { OAuthButtonGroup } from '../components/login/OAuthButtonGroup'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const emailRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const { loginUser } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await loginUser(emailRef.current.value, passwordRef.current.value)
    } catch (e) {
      console.log(e)
      if (e.code == 'auth/user-not-found') {
        setError('No account for given email')
      } else if (e.code === 'auth/invalid-email') {
        setError('Invalid email')
      } else if (e.code === 'auth/wrong-password') {
        setError('Incorrect password')
      } else {
        setError('Failed to login account')
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
              Log In
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
              <Stack
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
              >
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Link href="/" color={'blue.400'}>
                  Forgot password?
                </Link>
              </Stack>
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
                  Sign In
                </Button>
              </Stack>
              <Text align={'center'}>
                Need an account?{' '}
                <Link href="/signup" color={'blue.400'}>
                  Sign Up
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

export default Login
