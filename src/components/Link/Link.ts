import type {Snippet} from 'svelte'
import type {HTMLAnchorAttributes} from 'svelte/elements'
import type {RouteLocation} from '../Route/Route.ts'

export type LinkProps = {
  // children?: Snippet<[isCurrent: boolean]>
  children?: Snippet<[props: GetPropsParams]>
  href?: string
  /** @deprecated use `href` */
  to?: string

  replace?: boolean
  preserveScroll?: boolean
  state?: { [k in string | number]: unknown }
} & Omit<HTMLAnchorAttributes, 'href' | 'children'>

export type GetPropsParams = {
  location: RouteLocation
  href: string
  isPartiallyCurrent: boolean
  isCurrent: boolean
}
