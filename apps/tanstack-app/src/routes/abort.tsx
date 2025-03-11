import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/abort')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/abort"!</div>
}
