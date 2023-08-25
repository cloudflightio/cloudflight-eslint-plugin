import {createRule} from '../util/create-rule';

const disallowedEvents = new Set([
    'onabort',
    'onanimationcancel',
    'onanimationend',
    'onanimationiteration',
    'onanimationstart',
    'onauxclick',
    'onbeforeinput',
    'onblur',
    'oncancel',
    'oncanplay',
    'oncanplaythrough',
    'onchange',
    'onclick',
    'onclose',
    'oncontextmenu',
    'oncuechange',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onfocus',
    'onformdata',
    'ongotpointercapture',
    'oninput',
    'oninvalid',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onload',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onlostpointercapture',
    'onmousedown',
    'onmouseenter',
    'onmouseleave',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onpause',
    'onplay',
    'onplaying',
    'onpointercancel',
    'onpointerdown',
    'onpointerenter',
    'onpointerleave',
    'onpointermove',
    'onpointerout',
    'onpointerover',
    'onpointerup',
    'onprogress',
    'onratechange',
    'onreset',
    'onresize',
    'onscroll',
    'onsecuritypolicyviolation',
    'onseeked',
    'onseeking',
    'onselect',
    'onselectionchange',
    'onselectstart',
    'onslotchange',
    'onstalled',
    'onsubmit',
    'onsuspend',
    'ontimeupdate',
    'ontoggle',
    'ontouchcancel',
    'ontouchend',
    'ontouchmove',
    'ontouchstart',
    'ontransitioncancel',
    'ontransitionend',
    'ontransitionrun',
    'ontransitionstart',
    'onvolumechange',
    'onwaiting',
    'onwebkitanimationend',
    'onwebkitanimationiteration',
    'onwebkitanimationstart',
    'onwebkittransitionend',
    'onwheel',
]);

export const NoOnEventAssignName = 'no-on-event-assign';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const NoOnEventAssign = createRule<[], 'noAssign'>({
    name: NoOnEventAssignName,
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'Enforces that all packages have absolute versions.',
            recommended: 'strict',
        },
        schema: [],
        messages: {
            noAssign: 'Directly assigning to the `on` events is not recommended. Use `addEventListener` instead.',
        },
    },
    defaultOptions: [],
    create(context) {
        return {
            AssignmentExpression(node) {
                if (node.left.type !== 'MemberExpression') {
                    return;
                }

                if (node.left.property.type !== 'Identifier') {
                    return;
                }

                if (disallowedEvents.has(node.left.property.name)) {
                    context.report({node, messageId: 'noAssign'});
                }
            },
        };
    },
});
