<template> 
    <div class="dashboard"> 
        sadsdsaads
    </div> 
</template> 
<script> 
    //import Alerts from './../components/demos/Alerts';

    export default { 
        components: { 
            //Alerts,
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