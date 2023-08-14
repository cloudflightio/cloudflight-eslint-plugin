import type {TmplAstElement} from '@angular-eslint/bundled-angular-compiler';
import {getTemplateParserServices} from '@angular-eslint/utils';
import {ESLintUtils} from '@typescript-eslint/utils';

type MessageIds = 'missingAttribute' | 'invalidDoubleSource';
const ngSrcAttributeName = 'ngSrc';

const createRule = ESLintUtils.RuleCreator(
    (name) => `https://github.com/cloudflightio/cloudflight-eslint-plugin/tree/main/packages/eslint-plugin-angular/src/rules/${name}.ts`,
);

export const imgUsesNgsrcRuleName = 'img-uses-ngsrc';
export const imgUsesNgsrcRule = createRule<[], MessageIds>({
    name: imgUsesNgsrcRuleName,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Ensures ngSrc is used instead of src for img elements.',
            recommended: 'error',
        },
        schema: [],
        messages: {
            missingAttribute: 'The attribute [ngSrc] should be used for img elements instead of [src].',
            invalidDoubleSource: 'Only [ngSrc] should exist on an img element. Delete the [src] attribute.',
        },
    },
    defaultOptions: [],
    create(context) {
        const parserServices = getTemplateParserServices(context);

        return {
            'Element$1[name=img]'(element: TmplAstElement) {
                const ngSrcPresent = hasNgSrcAttribute(element);
                const srcPresent = hasNormalSrcAttribute(element);

                if (!ngSrcPresent) {
                    context.report({
                        loc: parserServices.convertNodeSourceSpanToLoc(element.sourceSpan),
                        messageId: 'missingAttribute',
                    });
                }
                if (ngSrcPresent && srcPresent) {
                    context.report({
                        loc: parserServices.convertNodeSourceSpanToLoc(element.sourceSpan),
                        messageId: 'invalidDoubleSource',
                    });
                }
            },
        };
    },
});

function hasNgSrcAttribute({inputs, attributes}: TmplAstElement): boolean {
    return [...inputs, ...attributes].some(({name}) => name === ngSrcAttributeName);
}

function hasNormalSrcAttribute({inputs, attributes}: TmplAstElement): boolean {
    return [...inputs, ...attributes].some(({name}) => name === 'src');
}
