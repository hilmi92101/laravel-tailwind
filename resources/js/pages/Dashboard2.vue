<template> 
    <div class="dashboard-2"> 

        <div class="flex">
            <Sidebar2></Sidebar2>
            <Navbar></Navbar>

        </div>

    </div> 
</template> 
<script> 
    
    import Sidebar from './../components/flowbite/Sidebar';
    import Sidebar2 from './../components/flowbite/Sidebar2';
    import Navbar from './../components/flowbite/Navbar';

    export default { 
        components: { 
            Sidebar,
            Sidebar2,
            Navbar,
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