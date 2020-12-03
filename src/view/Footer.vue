<template>
  <div>
    {{data.number}}
    <button @click="click">click</button>
    {{message.name}}
    {{message.title}}
    <button @click="putMessage">putMessage</button>
  </div>
</template>
<script>
export default {
    props: ['data'] ,
    data(){
        return {
            message:{
            },
        };
    },
    created(){
        // this.message={
        //     name:'test'
        // };
        this.message.name='ttt';
    },
    methods:{
        click(){
            console.log('click');

            //this.data.number++;
            // this.data={
            //     number:44
            // };
        },
        putMessage(){
            console.log('put click');
            this.message.name="name";
            // this.message.title="title";
            // this.message={
            //     name: 'name', 
            //     title: 'title',
            // };
        }

    }
}
</script>