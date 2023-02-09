import type { RuleDefinition } from '../../../rule-definition';

export const noMagicNumbers: RuleDefinition = {
    name: 'no-magic-numbers',
    options: [
        'error',
        {
            ignore: [
                -1, // allow findIndex negative result
                0, // allow initial number value
                1, // allow typical increment
                2, // allow typical divide by half
                10, // allow typical parseInt radix
                1000, // allow typical timestamp divider
            ],
            ignoreDefaultValues: true,
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        },
    ],
};
