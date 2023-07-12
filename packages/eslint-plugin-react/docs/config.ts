import { DefaultTheme } from "vitepress";
import SidebarItem = DefaultTheme.SidebarItem;

export function sidebar(link: string): SidebarItem[] {
    return [
        {
            text: "eslint-plugin-react",
            link,
            items: [
                {
                    text: "Rules",
                    link: `${link}rules/`,
                },
                {
                    text: "Configs",
                    link: `${link}configs/`
                }
            ],
        },
    ];
}
