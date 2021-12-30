const app = Vue.createApp({
    data() {
        return {
            title: "harry poter",
            author  : "R.J roling",
            age: 45
        }
    },
    methods: {
        changeTitle(title){
        this.title = title
     }
    }
})

app.mount('#app')
