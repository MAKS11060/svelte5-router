<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { useRouter } from '../../lib/contexts.js'
  import { canUseDOM } from '../../lib/utils.js'
  import { isAsync, type RouteParams, type RouteProps } from './Route.js'

  let {path = '', component, children, ...rest}: RouteProps = $props()

  let routeParams = $state<RouteParams>({})
  let routeProps = $state({})

  const {registerRoute, unregisterRoute, activeRoute} = useRouter()

  const route = {
    path,
    // If no path prop is given, this Route will act as the default Route
    // that is rendered if no other Route in the Router is a match.
    default: path === '',
  }

  const PropComponent = isAsync(component) ? component() : component

  $effect.pre(() => {
    if ($activeRoute && $activeRoute.route === route) {
      routeParams = $activeRoute.params

      canUseDOM() && !$activeRoute.preserveScroll && window?.scrollTo(0, 0)
    }
  })

  onMount(() => {
    registerRoute(route)
  })

  onDestroy(() => {
    unregisterRoute(route)
  })
</script>

{#if $activeRoute && $activeRoute.route === route}
  {#if PropComponent && PropComponent instanceof Function}
    <PropComponent {...routeParams} {...rest} />
  {:else if PropComponent && PropComponent instanceof Promise}
    {#await PropComponent then C}
      <C.default {...routeParams} />
    {:catch error}
      <p>{error.message}</p>
    {/await}
  {:else}
    {@render children?.(routeParams)}
  {/if}
{/if}
