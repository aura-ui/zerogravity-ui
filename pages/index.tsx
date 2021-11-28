import type { NextPage } from 'next'
import { Center } from '../components/Center'
import { Heading } from '../components/Heading'
import { Button } from '../components/Button'
import { AutoLayout } from '../components/AutoLayout'

const Home: NextPage = () => {
  return (
    <Center>
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
    </Center>
  )
}

export default Home
