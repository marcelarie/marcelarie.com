export interface BlogPostsDataI {
    year: number
    posts: {
        title: string
        lang: string[]
        description: string
        date: string
        tags: string[]
    }[]
}
