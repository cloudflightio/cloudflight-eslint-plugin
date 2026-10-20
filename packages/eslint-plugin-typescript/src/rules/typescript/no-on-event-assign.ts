import type {TSESTree} from '@typescript-eslint/utils';

import {createRule} from '../../util/create-rule';

const disallowedEvents = [
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
    // window, worker and websocket handlers
    'onafterprint',
    'onbeforeprint',
    'onbeforeunload',
    'onhashchange',
    'onlanguagechange',
    'onmessage',
    'onmessageerror',
    'onoffline',
    'ononline',
    'onopen',
    'onpagehide',
    'onpageshow',
    'onpopstate',
    'onrejectionhandled',
    'onstorage',
    'onunhandledrejection',
    'onunload',
];

// a string literal, or a template literal without expressions
function constantString(node: TSESTree.Node | undefined): string | undefined {
    if (node?.type === 'Literal' && typeof node.value === 'string') {
        return node.value;
    }

    if (node?.type === 'TemplateLiteral' && node.expressions.length === 0) {
        return node.quasis[0]?.value.cooked ?? undefined;
    }

    return undefined;
}

function assignedPropertyName(member: TSESTree.MemberExpression): string | undefined {
    if (!member.computed && member.property.type === 'Identifier') {
        return member.property.name;
    }

    // dynamic keys cannot be resolved statically, only constant strings are checked
    return member.computed ? constantString(member.property) : undefined;
}

export const NoOnEventAssignName = 'no-on-event-assign';
/**
 * Comment needed to prevent type declaration generation, which is broken.
 * @internal
 */
export const NoOnEventAssign = createRule<[], 'noAssign' | 'noAttribute'>({
    name: NoOnEventAssignName,
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallows assigning event handlers to `on*` properties and attributes, use `addEventListener` instead.',
        },
        schema: [],
        messages: {
            noAssign: 'Directly assigning to the `on` events is not recommended. Use `addEventListener` instead.',
            noAttribute: 'An `on` attribute runs a string as code. Use `addEventListener` instead.',
        },
    },
    defaultOptions: [],
    create(context) {
        return {
            AssignmentExpression(node) {
                if (node.left.type !== 'MemberExpression') {
                    return;
                }

                const name = assignedPropertyName(node.left);

                if (name !== undefined && disallowedEvents.includes(name)) {
                    context.report({node, messageId: 'noAssign'});
                }
            },
            CallExpression(node) {
                const callee = node.callee;

                if (callee.type !== 'MemberExpression' || callee.computed || callee.property.type !== 'Identifier') {
                    return;
                }

                // attribute names are case-insensitive
                const name = constantString(node.arguments[0])?.toLowerCase();

                if (callee.property.name === 'setAttribute' && name !== undefined && disallowedEvents.includes(name)) {
                    context.report({node, messageId: 'noAttribute'});
                }
            },
        };
    },
});
