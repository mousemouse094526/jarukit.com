import type { Data } from './+data'
import { useData } from 'vike-react/useData'
import { Counter } from './Counter.js'

export default function Page() {
  const { testData } = useData<Data>()
  return (
    <>
      <h1 className="font-bold text-3xl pb-4">BewLnwZa007</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive.
          {' '}
          <Counter />
        </li>
      </ul>
      {testData.map(item => (
        <div key={item.id} className="py-2">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )
}
