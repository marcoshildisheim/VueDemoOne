const app = Vue.createApp({
    data() {
        return {
            newComment: '',
            comments: [
                'Hello! Check out this vue.js demo deaturing the following features:',
                'Virtual DOM',
                'Dynamic Binding',
                '& Components'
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

