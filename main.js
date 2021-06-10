const InputForm={
    template:`
    <div class="input-form">
  <form @submit='submitForm' class='ui form'>
    <div class="field">
      <input v-model="newItem" placeholder="Add an Item!" type="text">
    </div>
    <button class="ui button">Submit</button>
  </form>
  
<div class="ui segment">
<h4 class="ui header">Items</h4>
  <ul>
     <li v-for="item in items" class="item">{{item}}</li>
  </ul>
</div>
</div>
    `,
    data(){
        return{
            newItem:'',
            items:[]
        }
    },
    methods:{
       submitForm(evt){
           this.items.push(this.newItem)
           this.newItem=''
           evt.preventDefault();
       }


       // shift+alt+f
     
        }
    }

Vue.createApp({
    components:{
       "input-form":InputForm,
    }
}).mount('#app')
