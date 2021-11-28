import type { NextPage } from 'next'
import { Center } from '../components/Center'
import { Heading } from '../components/Heading'
import { Button } from '../components/Button'
import { AutoLayout } from '../components/AutoLayout'
import { Flex } from '../components/Flex'
import { Box } from '../components/Box'
import { Text } from '../components/Text'
import { ThemeToggle } from '../utils/components/ThemeToggle'

const Home: NextPage = () => {
  return (
    <Box>
      <Flex
        css={{
          justifyContent: 'space-between',
          p: '$2',
          mb: '$6',
          boxShadow: '0 1px 1px $colors$subtleBorder',
        }}
      >
        <Text>zerogravity</Text>
        <ThemeToggle />
      </Flex>
      <Center>
        <AutoLayout>
          <Heading>Welcome to zerogravity</Heading>
          <AutoLayout css={{ gap: '$4' }}>
            <Button size="sm">Log In</Button>
            <Button variant="outline" size="md">
              Log In
            </Button>
            <Button variant="solid" size="md">
              Log In
            </Button>
            <Button variant="ghost" size="lg">
              Log In
            </Button>
          </AutoLayout>
        </AutoLayout>
      </Center>
    </Box>
  )
}

export default Home
