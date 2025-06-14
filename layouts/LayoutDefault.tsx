import { AppShell, Burger, Group, Image, MantineProvider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import logoUrl from '../assets/logo.svg'
import { Link } from '../components/Link'

import theme from './theme.js'
import '@mantine/core/styles.css'

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure()
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{ breakpoint: 'sm', collapsed: { mobile: !opened }, width: 300 }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <a href="/">
              {' '}
              <Image h={50} fit="contain" src={logoUrl} />
              {' '}
            </a>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <Link href="/" label="Welcome" />
          <Link href="/todo" label="Todo" />
        </AppShell.Navbar>
        <AppShell.Main>
          {' '}
          {children}
          {' '}
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}
