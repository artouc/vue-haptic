import pluginVue from "eslint-plugin-vue"

export default [
    ...pluginVue.configs["flat/recommended"],
    {
        files: ["**/*.vue"],
        rules: {
            "vue/html-indent": ["error", 4],
            "vue/multi-word-component-names": "off",
        },
    },
]
