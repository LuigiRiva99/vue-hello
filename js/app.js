
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello VUE',
      titleClass: 'title',
      image : './img/vue.jpg'
    }
  }
}).mount('#app')