const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Hello world',
        };
    },

    methods: {
        printHello() {
            console.log('hi Vue');
        },
    },

    mounted() {
        this.printHello();
    },
});

app.mount('#app')