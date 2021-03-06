import type { RuleDefinition } from '../../../rule-definition';

export const banTypes: RuleDefinition = {
    name: 'ban-types',
    options: [
        'error',
        {
            types: {
                String: {
                    message: 'Use string instead',
                    fixWith: 'string',
                },
                Boolean: {
                    message: 'Use boolean instead',
                    fixWith: 'boolean',
                },
                Number: {
                    message: 'Use number instead',
                    fixWith: 'number',
                },
                Symbol: {
                    message: 'Use symbol instead',
                    fixWith: 'symbol',
                },

                Function: {
                    message: [
                        'The `Function` type accepts any function-like value.',
                        'It provides no type safety when calling the function, which can be a common source of bugs.',
                        'It also accepts things like class declarations, ' +
                            'which will throw at runtime as they will not be called with `new`.',
                        'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
                    ].join('\n'),
                },

                // object typing
                Object: {
                    message: [
                        'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
                        '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                        '- If you want a type meaning "any value", you probably want `unknown` instead.',
                    ].join('\n'),
                },
                '{}': {
                    message: [
                        '`{}` actually means "any non-nullish value".',
                        '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                        '- If you want a type meaning "any value", you probably want `unknown` instead.',
                    ].join('\n'),
                },
            },
        },
    ],
};
