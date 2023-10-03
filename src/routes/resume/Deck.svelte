<script>
	import jobs from '$lib/jobs.json';
	import Card from './Card.svelte';
</script>

<div class="w-full text-token grid grid-cols-1 md:grid-cols-4 gap-5">
	{#each jobs as job, i}
		<Card {...job} />
	{/each}
</div>
