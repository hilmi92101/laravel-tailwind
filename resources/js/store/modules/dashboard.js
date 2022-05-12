const state = { 
    currentLang: 'en', 
}; 
const getters = { 
    currentLang: state => { 
        return state.currentLang; 
    }, 
}; 
const actions = { 
}; 
const mutations = { 
}; 
export default { 
    namespaced: true, 
    state, 
    getters, 
    actions, 
    mutations, 
}