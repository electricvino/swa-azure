<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor, Avatar, Drawer, drawerStore } from '@skeletonlabs/skeleton';
  import {page} from '$app/stores';
  import Fa from 'svelte-fa';
  import {faHome, faFlask, faFile, faGauge, faBlog, faAddressCard } from '@fortawesome/free-solid-svg-icons';
  import Navigation from '$lib/Navigation/Navigation.svelte';
  
  function drawerOpen(): void {
      drawerStore.open();
    }
</script>

<Drawer>
  <h2 class="p-4">Navigation</h2>
  <hr />
  <Navigation />
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
  <svelte:fragment slot="header">  
    <AppBar>
      <svelte:fragment slot="lead">
        <button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
          <span>
            <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
              <rect width="100" height="20" />
              <rect y="30" width="100" height="20" />
              <rect y="60" width="100" height="20" />
            </svg>
          </span>
        </button>
        <strong class="text-xl uppercase">Jon Vinson</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <Avatar initials="JV" width="w-10" background="bg-primary-500" />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <Navigation />
  </svelte:fragment>
  <svelte:fragment slot="pageHeader"></svelte:fragment>
	<!-- Page Route Content -->
	<slot />
  <!-- ----- -->
  <svelte:fragment slot="pageFooter"></svelte:fragment>
  <svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
