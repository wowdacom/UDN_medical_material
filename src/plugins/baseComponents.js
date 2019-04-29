export default {

    install(Vue){
        const context = require.context('@/components/base', false, /\.vue/)
        context.keys().forEach(key => {
            const component = context(key).default
            Vue.component(component.name, component)
        })
    }
}
