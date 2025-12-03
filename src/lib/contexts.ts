import {getContext} from 'svelte'
import type {readable, writable} from 'svelte/store'
import type {RouterContext} from './RouterContext.ts'
import type {globalHistory} from './history.ts'
import type {RouteLocation} from '../components/Route/Route.ts'

export const LOCATION = {}
export const ROUTER = {}
export const HISTORY = {}

type LocationContext = ReturnType<typeof readable<RouteLocation>>

type HistoryContext = typeof globalHistory

export const useInternalLocation = () => getContext<ReturnType<typeof writable<RouteLocation>>>(LOCATION)

export const useLocation = () => getContext<LocationContext>(LOCATION)
export const useRouter = () => getContext<RouterContext>(ROUTER)
export const useHistory = () => getContext<HistoryContext>(HISTORY)
