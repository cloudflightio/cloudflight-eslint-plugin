import { defineConfig } from "vitepress";
import { sidebar as eslintAngularSidebar } from "../packages/eslint-plugin-angular/docs/config";
import { sidebar as eslintNodeSidebar } from "../packages/eslint-plugin-node/docs/config";
import { sidebar as eslintReactSidebar } from "../packages/eslint-plugin-react/docs/config";
import { sidebar as eslintTypescriptSidebar } from "../packages/eslint-plugin-typescript/docs/config";
import { sidebar as eslintVueSidebar } from "../packages/eslint-plugin-vue/docs/config";

const angularLink = "/eslint-plugin-angular/";
const nodeLink = "/eslint-plugin-node/";
const reactLink = "/eslint-plugin-react/";
const typescriptLink = "/eslint-plugin-typescript/";
const vueLink = "/eslint-plugin-vue/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Cloudflight ES-Lint Plugin",
    description: "Documentation for all Cloudflight ES-Lint Plugins",
    srcExclude: ['**/README.md'],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            {
                text: "Plugins",
                items: [
                    { text: "Node", link: nodeLink },
                    { text: "Typescript", link: typescriptLink },
                    { text: "Angular", link: angularLink },
                    { text: "React", link: reactLink },
                    { text: "Vue", link: vueLink },
                ],
            },
        ],

        sidebar: {
            [angularLink]: eslintAngularSidebar(angularLink),
            [nodeLink]: eslintNodeSidebar(nodeLink),
            [reactLink]: eslintReactSidebar(reactLink),
            [typescriptLink]: eslintTypescriptSidebar(typescriptLink),
            [vueLink]: eslintVueSidebar(vueLink),
        },

        socialLinks: [{ icon: "github", link: "https://github.com/cloudflightio/cloudflight-eslint-plugin" }],

        footer: {
            message: 'Released under the <a href="https://github.com/cloudflightio/cloudflight-eslint-plugin/blob/main/LICENSE">Apache License 2.0</a>.',
            copyright: 'Copyright © 2022-present <a href="https://github.com/cloudflightio">Cloudflight</a>'
        },
        search: {
            provider: 'local'
        }
    },
    rewrites: {
        "docs/:remaining(.*)": ":remaining",
        "packages/:pkg/docs/:remaining(.*)": ":pkg/:remaining",
    },
});
