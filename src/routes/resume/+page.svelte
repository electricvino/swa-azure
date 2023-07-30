<script lang="ts">
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
  import {AppShell} from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="about my resume" />
</svelte:head>

{#each data.jobs as job, i}
   <div class="card p-4 job">
     <header class="card-header">
       <span class="strong">{job.job_title}</span>
       {job.company}
       {job.start} - {job.end}
     </header> 

     <section class="p-4">
       <ul>
         {#each job.description as detail}
           <li>{detail}</li>
         {/each}
       </ul>
     </section>
     <footer class="card-footer">Enter filter tags here</footer>
   </div>
{/each}
