import {TSESLint} from '@typescript-eslint/utils';

import {RecommendedConfig} from './recommended/recommended.config';

export const configs: Record<string, TSESLint.Linter.ConfigType> = {
    recommended: RecommendedConfig,
};
