import {defineUserConfig} from 'vuepress'
import theme from "./theme";
import {pwaPlugin} from "vuepress-plugin-pwa2";
import docsearchPlugin from "@vuepress/plugin-docsearch";

export default defineUserConfig({
    dest: "dist/docs",

    base: "/",
    title: 'Bot3 docs',
    description: 'Bot3.ai docs and user guides',

    head: [],

    theme,
    shouldPrefetch: false,
    plugins: [
        pwaPlugin({
            update: "force"
        }),
        docsearchPlugin({
            appId: "",
            apiKey: "",
            indexName: "",
            locales: {
                "/": {
                    placeholder: "Search the docs",
                    translations: {
                        button: {
                            buttonText: "Search",
                            buttonAriaLabel: "Search docs",
                        },
                    },
                },
            },
        }),
    ],
})