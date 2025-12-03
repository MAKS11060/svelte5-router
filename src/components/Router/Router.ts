import type {Snippet} from 'svelte'
import type {globalHistory} from '../../lib/history.ts'
import type {RouteLocation} from '../Route/Route.ts'

export type Viewtransition = {
  fn?: any
  delay?: number
  duration?: number
  x?: number
  y?: number
  opacity?: number
  easing?: any
  css?: (t: number) => string
}

export type RouterProps = {
  children: Snippet<[activeRoute: string | null, routeLocation: RouteLocation]>
  basepath?: string
  url?: string
  viewtransition?: (direction?: string) => Viewtransition
  history?: typeof globalHistory
}
