<template> 
    <div class="dashboard"> 

        <!-- Main Container -->
        <div class="flex flex-row">

            <!-- Component One -->
            <div class="flex flex-col bg-gray-50 h-screen justify-between w-64 py-4 px-2">

                <div class="flex items-center justify-between text-gray-600 text-3xl px-5">

                    <b>Reservations</b>

                </div>

                <div class="flex flex-col flex-auto">

                    <div v-for="list in lists" class="p-2 hover:bg-pink-100">
                        <div class="flex flex-row space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" :d="list.svg.d" />
                            </svg>
                            <h4 :class="isActive(list)" class="text-gray-500 hover:text-pink-600 cursor-pointer">{{ list.title }}</h4>
                        </div>
                    </div>

                </div>

                <div class="flex flex-col">
                    <button class="rounded-full bg-pink-500 py-2 text-white text-lg">Logout</button>
                </div>

            </div>

            <!-- Component Two -->
            <div class="flex-auto">

                <div class="flex flex-col">

                    <div class="flex flex-col bg-white">

                        <div class="flex flex-row space-x-3">
                            <h4 class="font-bold text-gray-500 p-1">{{ pageTitle }}</h4>
                        </div>

                        <p class="text-gray-400 p-1">30th October 2022 | 1st November 2022</p>

                    </div>

                    <!-- Content Starts Here -->
                    <div class="min-h-screen bg-blue-50">

                        <!-- Grid Starts Here -->
                        <div class="mt-8 grid gap-10 lg:grid-cols-3 sm:grid-cols-2 p-4">
                            
                            <div v-for="widget in widgets" class="flex items-center bg-white rounded shadow-sm justify-between p-5">
                                
                                <div>
                                    <div class="text-sm text-gray-400">{{ widget.title }}</div>
                                    <div class="flex items-center pt-1">
                                        <div class="text-3xl font-medium text-gray-600">{{ widget.number }}</div>
                                    </div>
                                
                                </div>
                                <div class="text-pink-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" :d="widget.svg.d" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <!-- Grid Ends Here -->

                        <!-- Grid Starts Here -->
                        <div class="mt-5">
                            lalalalla
                        </div>
                        <!-- Grid Ends Here -->
                    
                    </div>
                    <!-- Content Ends Here -->

                </div>
            </div>

        </div>

    </div> 
</template> 
<script> 
    

    export default { 
        components: { 
        }, 
        props: { 
        }, 
    	data() { 
            return { 
                pageTitle: `Dashboard`,
                lists: [
                    {
                        isActive: true,
                        svg: {
                            d: `M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z`,
                        },
                        title: 'Dashboard',
                        url: '/dashboard',
                    },
                    {
                        isActive: false,
                        svg: {
                            d: `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`,
                        },
                        title: 'Reservations',
                        url: '/reservations',
                    },
                    {
                        isActive: false,
                        svg: {
                            d: `M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`,
                        },
                        title: 'Services',
                        url: '/services',
                        
                    },
                    
                ],
                widgets: [
                    {
                        svg: {
                            d: `M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3  3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z`,
                        },
                        title: 'Check in Today',
                        number: '34',
                    },
                    {
                        svg: {
                            d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z`,
                        },
                        title: 'Check out Today',
                        number: '21212',
                    },
                    {
                        svg: {
                            d: `M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z`,
                        },
                        title: 'Total Properties',
                        number: '500',
                    },
                    
                ],

            } 
        }, 
        created() { 
        }, 
    	methods: { 
            redirect(routeName){  
                this.$router.push({name: routeName});   
            }, 
            isActive(list){
                var currentUrl = '/dashboard';
                if(list.url == currentUrl){
                    return `font-bold`;
                }
                return;
            }
        }, 
        computed: { 
        }, 
        filters: { 
        } 
    } 
</script>