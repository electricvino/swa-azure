<script>
  import jobs from '$lib/jobs.json';
  import {Avatar} from '@skeletonlabs/skeleton';
  import {AppShell} from '@skeletonlabs/skeleton'; 
  import Deck from './Deck.svelte';
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="about my resume" />
</svelte:head>

<Deck />

