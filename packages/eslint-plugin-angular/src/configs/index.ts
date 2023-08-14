import {TSESLint} from '@typescript-eslint/utils';

import {RecommendedConfig} from './recommended/recommended.config';
import {RecommendedHtmlConfig} from './recommended-html/recommended-html.config';
import {RecommendedTypescriptConfig} from './recommended-typescript/recommended-typescript.config';

export const configs: Record<string, TSESLint.Linter.Config> = {
    'recommended-typescript': RecommendedTypescriptConfig,
    'recommended-html': RecommendedHtmlConfig,
    recommended: RecommendedConfig,
};
