import { AppShell, Burger, Group, Image, MantineProvider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import logoUrl from '@/src/assets/logo.svg'
import { Link } from '@/src/components/Link'
import theme from './theme.js'

import './global.css'
import '@mantine/core/styles.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure()
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
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
