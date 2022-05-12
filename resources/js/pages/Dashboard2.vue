<template> 
    <div class="dashboard-2"> 

        <div class="flex">
            <Sidebar2 class="custom-sidebar-1"></Sidebar2>
            <Content class="custom-content-1 w-full"></Content>

        </div>

    </div> 
</template> 
<script> 
    
    import Sidebar from './../components/flowbite/Sidebar';
    import Sidebar2 from './../components/flowbite/Sidebar2';
    import Content from './../components/flowbite/Content';
    

    export default { 
        components: { 
            Sidebar,
            Sidebar2,
            Content,
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