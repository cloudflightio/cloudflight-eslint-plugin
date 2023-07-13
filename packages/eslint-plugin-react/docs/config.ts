import * as path from 'path';
import { DefaultTheme } from "vitepress";
import {createItemsFor} from '../../../.vitepress/create-items-for';
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
                    collapsed: true,
                    items: createItemsFor(path.join(__dirname, 'rules'), `${link}rules/`)
                },
                {
                    text: "Configs",
                    link: `${link}configs/`,
                    collapsed: true,
                    items: createItemsFor(path.join(__dirname, 'configs'), `${link}configs/`)
                }
            ],
        },
    ];
}
