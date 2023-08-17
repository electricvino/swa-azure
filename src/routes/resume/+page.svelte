<script>
  import jobs from '$lib/jobs.json';
  import {Avatar} from '@skeletonlabs/skeleton';
  import {AppShell} from '@skeletonlabs/skeleton'; 
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="about my resume" />
</svelte:head>

{#each jobs as {job_title, image_src, description, company, company_city, start, end}, i}
  <a class="card card-hover overflow-hidden">
    <header>
        <img src={image_src} alt="Post" class="bg-black/50 w-full aspect-[21/9]">
    </header>
    <div class="p-4 space-y-4">
        <h6 class="h6">{company}</h6>
        <h3 class="h3" data-toc-ignore>{job_title}</h3>
        <article>
            <p>{description}
            </p>
        </article>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
        <div class="flex-auto flex justify-between items-center">
            <h6 class="h6">{start} to {end}</h6>
    </footer>
</a> 
{/each}