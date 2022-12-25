import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'
import { OAuthButtonGroup } from '../components/login/OAuthButtonGroup'
import { PasswordField } from '../components/login/PasswordField'

function Login() {
  return (
    <Container
      maxW="lg"
      mt="4"
      py={{ base: '8', md: '16' }}
      px={{ base: '0', sm: '8' }}
      bg="#2b87d1"
      borderRadius="xl"
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center"></Stack>
          <Heading textAlign="center" color="white">
            Log In
          </Heading>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'white', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </HStack>
              <Button
                bg="#2b87d1"
                variant="primary"
                color="white"
                _hover={{ opacity: 0.8 }}
              >
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default Login
