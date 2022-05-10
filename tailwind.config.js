module.exports = {
    content: [
        './storage/framework/views/*.php', 
        './resources/views/**/*.blade.php', 
        './resources/js/**/*.vue',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {},
        container: {
            padding: '5rem',
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
