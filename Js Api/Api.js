const {createApp} = Vue;

let app = Vue.createApp({
    data(){
        return{
            date: '',
            name: '',
        }
    },
    created(){
        fetch("https://date.nager.at/api/v3/publicholidays/2017/AT")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.squad = data.date
            this.name = data.name
        })
        .catch(error => console.log(error));

    }
}).mount("#app");