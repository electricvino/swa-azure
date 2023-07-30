<script lang="ts">
  import {drawerStore} from '@skeletonlabs/skeleton';

  function drawerClose(): void {
      drawerStore.close();
    }
</script>

<nav class="list-nav p-4">
  <ul>
    <li><a href="/" on:click={drawerClose}>Homepage</a></li>
    <li><a href="/about" on:click={drawerClose}>About</a></li>
    <li><a href="/resume" on:click={drawerClose}>Resume</a></li>
  </ul>
</nav>
