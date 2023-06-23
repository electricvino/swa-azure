export const prerender = true;
import jobs from '../data/jobs.json';

export function load() {
    return {jobs: jobs}
}