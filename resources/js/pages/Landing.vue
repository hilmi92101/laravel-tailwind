<template> 
    <div class="landing"> 
        <h1>Landing page</h1> 
        <button @click.prevent="redirect('register')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">To Register page</button> 

        <div class="text-lg mt-6 p-4 text-red-500">  
            <h1>Home22222</h1>  
        </div>
    </div> 
</template> 
<script> 
    export default { 
        components: { 
            Text, 
        }, 
        props: { 
        }, 
    	data() { 
            return { 
            } 
        }, 
        created() { 
        }, 
    	methods: { 
            redirect(routeName){  
                this.$router.push({name: routeName});   
            }, 
        }, 
        computed: { 
        }, 
        filters: { 
        } 
    } 
</script>