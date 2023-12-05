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
  Td
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
      bg={'blue.500'}
      h="full"
      w="70vw"
      m="auto"
      borderRadius="xl"
      display="flex"
      flexDirection="column"
      gap="5"
    >
      <Box
        bg="whiteAlpha.400"
        w="25%"
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
        <Box px="4" pb="4" position="relative" justifyContent={'left'}>
          <Heading color="gray.600" size="sm">
            Joined
          </Heading>
          <Heading size="md">{guest ? '?' : joined}</Heading>
        </Box>
        <Center>
          <Button m="4" bg="yellow.400" hidden={!guest}>
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
          <Button m="4" bg="yellow.400" hidden={!guest}>
            <Link to={'/login'}>Log In</Link>
          </Button>
          <Button
            leftIcon={<SettingsIcon />}
            bg="gray.400"
            hidden={guest}
            mb="4"
          >
            Settings
          </Button>
        </Center>
      </Box>
      <Center bg="whiteAlpha.400" p="4" w="80%" mx="auto" borderRadius="xl">
        <TableContainer w="80%">
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
                  <Heading size="md">Visual Memory</Heading>
                </Td>
                <Td>
                  <Heading size="lg">?</Heading>
                </Td>
                <Td>
                  <Button bg="yellow.400">
                    <Link to={'/tests/visual-memory'}>Play</Link>
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Heading size="md">Sequence Memory</Heading>
                </Td>
                <Td>
                  <Heading size="lg">{guest ? '?' : sequence}</Heading>
                </Td>
                <Td>
                  <Button bg="yellow.400">
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
                  <Button bg="yellow.400">
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
                  <Button bg="yellow.400">
                    <Link to={'/tests/mental-math'}>Play</Link>
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
