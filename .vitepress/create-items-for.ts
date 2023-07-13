import {readdirSync} from 'fs';
import {DefaultTheme} from 'vitepress';
import SidebarItem = DefaultTheme.SidebarItem;

export function createItemsFor(dir: string, baseLink: string): SidebarItem[] {
    const files = readdirSync(dir)
    return files.filter((fileName) => fileName.endsWith('.md') && fileName !== 'index.md').map((fileName) => {
        const normalizedName = fileName.slice(0, -3)
        return {
            text: normalizedName,
            link: `${baseLink}${normalizedName}`
        }
    })
}
