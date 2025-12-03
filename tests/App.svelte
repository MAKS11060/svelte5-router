<!-- App.svelte -->
<script lang="ts">
  // import {dynamic, Link, Route, Router} from '@maks11060/svelte5-router'
  import {dynamic, Link, Route, Router} from '../src/index.ts'

  import About from './routes/About.svelte'
  import Blog from './routes/Blog.svelte'
  import Home from './routes/Home.svelte'

  const BlogPost = dynamic(import('./routes/BlogPost.svelte'))

  let url = $state('')
</script>

<Router {url}>
  <nav>
    <Link class="link" href="/">Home</Link>
    <Link class="link" href="/about">About</Link>
    <Link class="link" href="/blog">Blog</Link>
    <Link class="link" href="/profile">Profile</Link>
  </nav>
  <div>
    <Route path="/blog/:id" component={BlogPost} />
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} />
    <Route path="/"><Home /></Route>

    <Route path="/profile/*">
      <div class="center">
        <h1>Profile page</h1>

        <!-- Profile router -->
        <Router>
          <div>
            <Link class="link" href="posts">Posts</Link>
            <Link class="link" href="settings">Settings</Link>
          </div>

          <div>
            <Route path="/posts">Profile Posts</Route>
            <Route path="/settings/*">
              <h2>Profile Settings</h2>

              <!-- profiles/settings router -->
              <Router>
                <div>
                  <Link class="link" href="profile">Public profile</Link>
                  <Link class="link" href="account">Account</Link>
                  <Link class="link" href="appearance">Appearance</Link>
                </div>

                <div>
                  <Route path="/profile">
                    <h3>Profile</h3>
                  </Route>
                  <Route path="/account">
                    <h3>Account</h3>
                  </Route>
                  <Route path="/appearance">
                    <h3>Appearance</h3>
                  </Route>
                </div>
              </Router>
            </Route>
          </div>
        </Router>
      </div>
    </Route>
  </div>
</Router>

<style>
  nav {
    padding: 1rem;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
</style>
