import { Button } from '@mantine/core'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Button
      variant="filled"
      color="orange"
      type="button"
      onClick={() => setCount(count => count + 1)}
    >
      Counter
      {' '}
      {count}
    </Button>
  )
}
