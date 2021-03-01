const app = Vue.createApp({
    data() {
        return {
            newComment: '',
            comments: [
                'That is really interesting!',
                'Wow....',
                'What is this?'
            ]
        }
    },

    methods: {
        addComment() {
            this.comments.push(this.newComment)
            this.newComment = ''
        }
    }
})

app.component('individual-comment', {
    template:
    `<li>{{ commentpost }}</li>`,
    props: ['commentpost']
})

