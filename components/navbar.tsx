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
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  return (
    <NextLink href={href}>
      <Link p={3} m={0} bg={active ? '#eeeeee' : undefined}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

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
            <LinkItem href="/" path={path}>
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
          <LinkItem href="/tests/sequence" path={path}>
            DASHBOARD
          </LinkItem>
        </Stack>
        <Stack display={{ base: 'none', md: 'flex' }}>
          <LinkItem href="/signup" path={path}>
            SIGNUP
          </LinkItem>
        </Stack>
        <Stack display={{ base: 'none', md: 'flex' }}>
          <LinkItem href="/login" path={path}>
            LOGIN
          </LinkItem>
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
