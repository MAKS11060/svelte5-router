<script lang="ts">
  import Link from '../src/components/Link/Link.svelte'
  import Router from '../src/components/Router/Router.svelte'

  let url = $state('')
</script>

<Router {url}>
  <Link class="" href="/">Main</Link>
</Router>
