const ButtonRow={
    template:`
    <button @click='onButtonClick' name='button-hoodie' value='fullstack-hoodie' class='ui button'>Hoodie</button>
<button @click='onButtonClick' name='button-tee' value='fullstack-tee' class='ui button'>Tee</button>
<button @click='onButtonClick' name='button-fitted-cap' value='fullstack-fitted-cap' class='ui button'>Fitted Cap</button>
<button @click='onButtonClick' name='button-jacket' value='fullstack-jacket' class='ui button'>Jacket</button>
    `,
    methods:{
        // onHoodieClick(evt){
        //     console.log("The user clicked button-hoodie",evt);
        // },         
        // onTeeClick(evt){
        //     console.log("The user clicked button-tee",evt);
        // },
        // onFittedCapClick(evt){
        //     console.log("The user clicked button-fitted-cap",evt);
        // },
        // onJacketClick(evt){
        //     console.log("The user clicked button-jacket",evt);
        // },


       // shift+alt+f
        onButtonClick(evt){
            const button =evt.target;
            console.log(`The user clicked ${button.name}:${button.value}` );
        }
    }
}
Vue.createApp({
    components:{
        "button-row": ButtonRow
    }
}).mount('#app')
