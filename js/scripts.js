const { createApp } = Vue;  // Desctructuring

const app = createApp({              // Serve per creare un oggetto per l'istanza di Vue
    data() {
        return {
            message: 'Hello Vue!',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
        }
    }
});
    
app.mount('#app');