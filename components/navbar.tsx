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
  const inactiveColor = '#000'
  return (
    <NextLink href={href}>
      <Link p={2} bg="#fff" color={active ? '#E5E7EB' : inactiveColor}>
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
      as="nav"
      w="100%"
      bg="#ffffff"
      zIndex={2}
      boxShadow="md"
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md" color="#000">
            <Link href="/">
              <a>⚡️ HUMAN BENCHMARK</a>
            </Link>
          </Heading>
        </Flex>
        <Stack>
          <LinkItem href="/sequence" path={path}>
            Sequence Memory
          </LinkItem>
        </Stack>
        <Box flex={1} alignContent="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              >
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>Home</MenuItem>
                  </NextLink>
                  <NextLink href="/sequence" passHref>
                    <MenuItem as={Link}>Sequence Memory</MenuItem>
                  </NextLink>
                </MenuList>
              </MenuButton>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
