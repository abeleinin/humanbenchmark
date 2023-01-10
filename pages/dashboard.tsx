import { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Center,
  Button,
  Tbody,
  Thead,
  Tr,
  TableContainer,
  Table,
  Th,
  Td,
  useColorModeValue
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { useAuth } from '../contexts/AuthContext'
import { useDB } from '../contexts/DatabaseContext'
import { Link } from 'react-router-dom'

function Dashboard() {
  const { currentUser } = useAuth()
  const { getData } = useDB()
  const [guest, setGuest] = useState(true)
  const [username, setUsername] = useState('')
  const [joined, setJoined] = useState('')
  const [sequence, setSequence] = useState('0')

  async function getUsername() {
    const userData = await getData()
    const join = new Date(userData.joined.seconds * 1000)
    setJoined(
      join.toLocaleString('en-US', {
        month: 'long'
      }) +
        ' ' +
        join.getFullYear().toString()
    )
    setUsername(userData.username)
    setSequence(userData.sequence)
  }

  useEffect(() => {
    if (currentUser != null) {
      setGuest(false)
      getUsername()
    } else {
      setGuest(true)
    }
  }, [currentUser])

  return (
    <Box
      color={useColorModeValue('gray.800', 'gray.200')}
      h="full"
      w={{ base: '100vw', md: '70vw' }}
      m="auto"
      display="flex"
      flexDirection="column"
      gap="5"
    >
      <Box
        bg={useColorModeValue('#f2e5bc', '#1d2021')}
        w={{ base: '75%', md: '40%' }}
        borderRadius="lg"
        alignSelf="stretch"
        alignItems="flex-start"
        mx="auto"
        mt="5"
      >
        <Box p="4">
          <Heading color="gray.600" size="sm">
            Username
          </Heading>
          <Heading size="lg">{guest ? 'GUEST' : username}</Heading>
        </Box>
        <Box px="4" position="relative" justifyContent={'left'}>
          <Heading color="gray.600" size="sm">
            Joined
          </Heading>
          <Heading size="md">{guest ? '?' : joined}</Heading>
        </Box>
        <Center>
          <Button
            m="4"
            bg={useColorModeValue('gray.600', '#fbf1c7')}
            color={useColorModeValue('gray.200', 'gray.800')}
            _hover={{ opacity: '80%' }}
            hidden={!guest}
          >
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
          <Button
            m="4"
            bg={useColorModeValue('gray.600', '#fbf1c7')}
            color={useColorModeValue('gray.200', 'gray.800')}
            _hover={{ opacity: '80%' }}
            hidden={!guest}
          >
            <Link to={'/login'}>Log In</Link>
          </Button>
          <Button
            m="4"
            bg={useColorModeValue('gray.600', '#fbf1c7')}
            color={useColorModeValue('gray.200', 'gray.800')}
            _hover={{ opacity: '80%' }}
            hidden={guest}
            leftIcon={<SettingsIcon />}
          >
            Settings
          </Button>
        </Center>
      </Box>
      <Center
        bg={useColorModeValue('#f2e5bc', '#1d2021')}
        p={{ base: '0', md: '4' }}
        w={{ base: '100%', md: '80%' }}
        mx={{ base: '0', md: 'auto' }}
        borderRadius="xl"
      >
        <TableContainer w={{ base: '100%', md: '80%' }}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>
                  <Heading size="sm">Game</Heading>
                </Th>
                <Th>
                  <Heading size="sm">Score</Heading>
                </Th>
                <Th>
                  <Heading size="sm">Play</Heading>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Heading size="md">Sequence Memory</Heading>
                </Td>
                <Td>
                  <Heading size="lg">{guest ? '?' : sequence}</Heading>
                </Td>
                <Td>
                  <Button
                    bg={useColorModeValue('gray.600', '#fbf1c7')}
                    color={useColorModeValue('gray.200', 'gray.800')}
                    _hover={{ opacity: '80%' }}
                  >
                    <Link to={'/tests/sequence'}>Play</Link>
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Heading size="md">1 to 50</Heading>
                </Td>
                <Td>
                  <Heading size="lg">?</Heading>
                </Td>
                <Td>
                  <Button
                    bg={useColorModeValue('gray.600', '#fbf1c7')}
                    color={useColorModeValue('gray.200', 'gray.800')}
                    _hover={{ opacity: '80%' }}
                  >
                    <Link to={'/tests/one-to-fifty'}>Play</Link>
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Heading size="md">Mental Math</Heading>
                </Td>
                <Td>
                  <Heading size="lg">?</Heading>
                </Td>
                <Td>
                  <Button
                    bg={useColorModeValue('gray.600', '#fbf1c7')}
                    color={useColorModeValue('gray.200', 'gray.800')}
                    _hover={{ opacity: '80%' }}
                  >
                    <Link to={'/tests/mental-math'}>Play</Link>
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Heading size="md">Reaction Time</Heading>
                </Td>
                <Td>
                  <Heading size="lg">?</Heading>
                </Td>
                <Td>
                  <Button
                    bg={useColorModeValue('gray.600', '#fbf1c7')}
                    color={useColorModeValue('gray.200', 'gray.800')}
                    _hover={{ opacity: '80%' }}
                  >
                    <Link to={'/dashboard'}>Play</Link>
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Heading size="md">Aim Trainer</Heading>
                </Td>
                <Td>
                  <Heading size="lg">?</Heading>
                </Td>
                <Td>
                  <Button
                    bg={useColorModeValue('gray.600', '#fbf1c7')}
                    color={useColorModeValue('gray.200', 'gray.800')}
                    _hover={{ opacity: '80%' }}
                  >
                    <Link to={'/dashboard'}>Play</Link>
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </Box>
  )
}

export default Dashboard
