<script>
    import {Avatar} from '@skeletonlabs/skeleton';
    import {Job } from ./Job;
    export let job: Job;
</script>

<a class="card card-hover overflow-hidden" href="job.image_src">
    <header>
        <img src="" alt="Post" class="bg-black/50 w-full aspect-[21/9]">
    </header>
    <div class="p-4 space-y-4">
        <h6 class="h6">Jobs</h6>
        <h3 class="h3" data-toc-ignore>{job.title}</h3>
        <article>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique id illo fugiat repudiandae totam repellat mollitia aperiam velit dolorum quas qui officia facere optio inventore, dolores sint veniam. Impedit, nam.
            </p>
        </article>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
        <Avatar src="" alt="Avatar" class="w-10 h-10" />
        <div class="flex-auto flex justify-between items-center">
            <h6 class="h6">Author</h6>
            <h6 class="h6">Date</h6>
    </footer>
</a> 