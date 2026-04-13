import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "1lojfmv9",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-13"
})

export default client