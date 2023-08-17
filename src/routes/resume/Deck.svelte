<script>
    import Card from "./Card.svelte";
    export let data;
</script>
{#each {data.length} as _, i}
  <Card /> 
{/each}