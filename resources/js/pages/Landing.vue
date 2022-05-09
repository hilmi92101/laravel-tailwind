<template> 
    <div class="landing"> 
        <h1>Landing page</h1> 
        <button @click.prevent="redirect('register')" class="btn btn-primary">To Register page</button> 
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