import { createRouter, createWebHistory } from 'vue-router'; 

import Landing from './pages/Landing';  
import Register from './pages/Register'; 
import Demo from './pages/Demo'; 
import Dashboard from './pages/Dashboard'; 
import Dashboard2 from './pages/Dashboard2'; 

const router = createRouter({  
    history: createWebHistory(),  
    routes: [  
        {  
            name: 'landing',  
            path: '/',  
            component: Landing,  
        },  
        {  
            name: 'register',  
            path: '/register',  
            component: Register,  
        },
        {  
            name: 'demo',  
            path: '/demo',  
            component: Demo,  
        },
        {  
            name: 'dashboard',  
            path: '/dashboard',  
            component: Dashboard,  
        },
        {  
            name: 'dashboard-2',  
            path: '/dashboard-2',  
            component: Dashboard2,  
        },

        

    ],  
});  
export default router;