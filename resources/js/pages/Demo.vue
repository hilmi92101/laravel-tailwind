<template> 
    <div class="demos container mx-auto px-4"> 
        <Alerts class="mt-5"></Alerts>
        <AlertsIcons class="mt-5"></AlertsIcons>
        
    </div> 
</template> 
<script> 
    import Alerts from './../components/demos/Alerts';
    import AlertsIcons from './../components/demos/AlertsIcons';

    export default { 
        components: { 
            Alerts,
            AlertsIcons,
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