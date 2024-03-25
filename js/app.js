
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello World',
      titleClass: 'title',
    }
  }
}).mount('#app')