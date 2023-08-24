<script>
    import jobs from '$lib/jobs.json';
    import Card from './Card.svelte';
</script>

{#each jobs as job, i}
  <Card {...job} />
{/each}