import type { RuleDefinition } from '../../../rule-definition';

export const noUnnecessaryCondition: RuleDefinition = {
    name: 'no-unnecessary-condition',
    options: [
        'off' /*
        typescript by default does not add undefined to the type of index-accessed properties
        because of that this rule incorrectly points correct checks out as error.
        typescript offers the compiler setting 'noPropertyAccessFromIndexSignature' which would solve this issue,
        but it is not perfect. It also adds 'undefined' to the type even if there was a bounds-check already.
        */,
        {
            allowConstantLoopConditions: true,
        },
    ],
};
