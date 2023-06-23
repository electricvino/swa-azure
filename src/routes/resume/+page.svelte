<script lang="ts">
   import _ from 'lodash';
   export let data;

   interface Job {
    job_title: string;
    company: string;
    start: string;
    end: string;
    description: string[];
    tags: string[];
    order: number;
   };

</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="about my resume" />
</svelte:head>

{#each _.orderBy(data.jobs, 'order', 'desc') as job(job.order)}
   <div class="job">
   <h1>{job.job_title}</h1>
   <h2>{job.company}</h2>
   {job.start} - {job.end}
   <ul>
   {#each job.description as detail}
      <li>{detail}</li>
   {/each}
   </ul>
   </div>
{/each}