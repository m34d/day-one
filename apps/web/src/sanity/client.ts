import {createClient} from 'next-sanity';

export const client = createClient({
    projectId: 'nbr582e3',
    dataset: 'production',
    apiVersion: '2025-07-09',
    useCdn: false,
})