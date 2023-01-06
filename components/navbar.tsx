import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  Button
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useDB } from '../contexts/DatabaseContext'

const LinkItem = ({ to, path, children }) => {
  const active = path === to
  return (
    <RouterLink to={to}>
      <Box p={3} m={0} bg={active ? '#eeeeee' : undefined}>
        {children}
      </Box>
    </RouterLink>
  )
}

function Navbar(props) {
  const { path } = props
  const [guest, setGuest] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { logoutUser, currentUser } = useAuth()
  const { getData } = useDB()
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (currentUser != null) {
      setGuest(false)
      console.log(getData())
    } else {
      setGuest(true)
    }
  }, [currentUser])

  async function handleLogout(e) {
    e.preventDefault()

    try {
      setLoading(true)
      setUsername('')
      await logoutUser()
    } catch (e) {
      setError('Failed')
    }
    setLoading(false)
  }

  return (
    <Box
      position="fixed"
      h="48px"
      as="nav"
      w="100%"
      bg="#ffffff"
      zIndex={2}
      boxShadow="md"
      {...props}
    >
      <Container
        display="flex"
        maxW="container.lg"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-between"
      >
        <Flex align="center" _hover={{ bg: '#eee' }}>
          <Heading size="md" color="#000">
            <LinkItem to="/" path={path}>
              ⚡️ HUMAN BENCHMARK
            </LinkItem>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem to="/dashboard" path={path}>
            DASHBOARD
          </LinkItem>
        </Stack>
        <Stack display={{ base: 'none', md: 'flex' }} hidden={!guest}>
          <LinkItem to="/signup" path={path}>
            SIGNUP
          </LinkItem>
        </Stack>
        <Stack display={{ base: 'none', md: 'flex' }} hidden={!guest}>
          <LinkItem to="/login" path={path}>
            LOGIN
          </LinkItem>
        </Stack>
        <Heading size="md">{username}</Heading>
        <Stack
          justify={'center'}
          display={{ base: 'none', md: 'flex' }}
          hidden={guest}
        >
          <Button onClick={handleLogout} disabled={loading}>
            SIGN OUT
          </Button>
        </Stack>
        <Box flex={0} alignContent="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon color="black" />}
                colorScheme="black"
                bgColor="#eeeeee"
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg="#fff">
                <NextLink href="/" passHref>
                  <MenuItem as={Link} _hover={{ bg: '#eeeeee' }}>
                    Home
                  </MenuItem>
                </NextLink>
                <NextLink href="/tests/sequence" passHref>
                  <MenuItem as={Link} _hover={{ bg: '#eeeeee' }}>
                    Sequence Memory
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
