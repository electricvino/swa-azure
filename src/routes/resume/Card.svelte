<script lang="ts">
    export let image_src: string;
    export let company: string;
    export let job_title: string;
    export let description: string[];
    export let start: Date;
    export let end: Date;
    export let url: string;
    export let tags: string[];
</script>  
  
<a class="card card-hover overflow-hidden" href={url}>
    <header>
      <img src={image_src} alt="Post" class="bg-black/50 w-full aspect-[21/9]">
    </header>
    <div class="p-4 space-y-4">
        <h2 class="h2">{company}</h2>        
        <h3 class="h3">{job_title}</h3>
        <h6 class="h6">{start} to {end}</h6>
        <article>
            <ul>
                {#each description as line}
                <li>{line}</li>
                {/each}
            </ul>
        </article>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
        <div class="flex justify-center space-x-2">
            {#each tags as tag}
                <span class="chip variant-filled">{tag}</span>
            {/each}
    </footer>
</a> 