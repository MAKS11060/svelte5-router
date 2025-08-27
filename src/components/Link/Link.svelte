<script lang="ts">
  import { useHistory, useLocation, useRouter } from '../../lib/contexts.ts'
  import { resolve, shouldNavigate } from '../../lib/utils.ts'
  import type { LinkProps } from './Link'

  let {
    children,
    click,
    to = '',
    replace = false,
    state = {},
    getProps = () => ({}),
    preserveScroll = false,
    ...props
  }: LinkProps = $props()

  const location = useLocation()
  const {base} = useRouter()
  const {navigate} = useHistory()

  let href = $derived(resolve(to, $base.uri))
  let isCurrent = $derived(href === $location.pathname)
  let isPartiallyCurrent = $derived.by(() => {
    const pathSegments = $location.pathname.split('/').filter(Boolean)
    const hrefSegments = href.split('/').filter(Boolean)

    if (hrefSegments.length < 1) return false
    if (pathSegments.length <= hrefSegments.length) return false

    for (let i = 0; i < hrefSegments.length; i++) {
      if (hrefSegments[i] !== pathSegments[i]) {
        return false
      }
    }

    return true
  })

  // let properties = $derived(
  //   getProps({
  //     location: $location,
  //     href,
  //     isPartiallyCurrent,
  //     isCurrent,
  //     // existingProps: props,
  //   })
  // )

  const onClick = (event: MouseEvent) => {
    click?.(event)
    if (shouldNavigate(event)) {
      event.preventDefault()
      // Don't push another entry to the history stack when the user
      // clicks on a Link to the page they are currently on.
      const shouldReplace = $location.pathname === href || replace
      navigate(href, {state, replace: shouldReplace, preserveScroll})
    }
  }
</script>

<a
  {href}
  aria-current={isCurrent ? 'page' : undefined}
  data-active-link={isCurrent ? 'page' : isPartiallyCurrent ? 'step' : undefined}
  onclick={onClick}
  {...props}
>
  <!-- <slot active={!!ariaCurrent} /> -->
  {@render children(Boolean(isCurrent))}
</a>
