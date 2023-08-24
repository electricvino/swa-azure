<script lang="ts">
    export let image_src: string;
    export let company: string;
    export let job_title: string;
    export let description: string;
    export let start: Date;
    export let end: Date;
    export let url: string;
</script>  
  
<a class="card card-hover overflow-hidden" href={url}>
    <header>
      <img src={image_src} alt="Post" class="bg-black/50 w-full aspect-[21/9]">
    </header>
    <div class="p-4 space-y-4">
        <h2 class="h2">{company}</h2>        
        <h3 class="h3" data-toc-ignore>{job_title}</h3>
        <h6 class="h6">{start} to {end}</h6>
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