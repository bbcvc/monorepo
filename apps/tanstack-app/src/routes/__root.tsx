import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Link to='/'>Go to /</Link>
      <Link to='/abort'>Go to /abort</Link>
      <Link to='/query'>Go to /query</Link>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
