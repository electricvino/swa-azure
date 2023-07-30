export const prerender = true;
import jobs from '../../lib/jobs.json';

export function load() {
  return {jobs: jobs}
}
