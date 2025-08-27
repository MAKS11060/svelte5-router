import type { Snippet } from 'svelte'
import type { ClassValue, HTMLAnchorAttributes } from 'svelte/elements'
import type { RouteLocation } from '../Route/Route.ts'

export type LinkProps = {
  children: Snippet<[boolean]>
  class?: ClassValue

  to: string
  replace?: boolean
  preserveScroll?: boolean
  state?: {
    [k in string | number]: unknown
  }
  getProps?: (linkParams: GetPropsParams) => Record<string, any>
  click?: (e: MouseEvent) => void
} & Omit<HTMLAnchorAttributes, 'href' | 'children'>

export type GetPropsParams = {
  location: RouteLocation
  href: string
  isPartiallyCurrent: boolean
  isCurrent: boolean
}
