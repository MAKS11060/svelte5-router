<script lang="ts">
  import {Link} from '@maks11060/svelte5-router'
  import blogposts from '../blogposts.json'

  interface Props {
    id: string
  }
  let {id}: Props = $props()

  $effect(() => {
    console.log(typeof id)
  })

  let text = $derived(blogposts[id as keyof typeof blogposts] ?? 'Not Found')
  let nextLink = $derived(
    !Number.isNaN(parseInt(id)) ? `/blog/${parseInt(id) + 1}` : null,
  )
</script>

<div class="container">
  <h1>Blog Post {id}</h1>
  <p>{text}</p>
  {#if nextLink}
    <Link to={nextLink}>Next</Link>
  {/if}
</div>
