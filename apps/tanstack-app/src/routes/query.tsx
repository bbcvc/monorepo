import { createFileRoute } from '@tanstack/react-router'
import Example from '../components/query-demo'

export const Route = createFileRoute('/query')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Example />
}
