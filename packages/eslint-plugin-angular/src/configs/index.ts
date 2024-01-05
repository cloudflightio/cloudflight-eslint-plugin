import {TSESLint} from '@typescript-eslint/utils';

import {FormatConfig, RecommendedConfig} from './recommended/recommended.config';
import {FormattingHtmlConfig, RecommendedHtmlConfig} from './recommended-html/recommended-html.config';
import {RecommendedTypescriptConfig} from './recommended-typescript/recommended-typescript.config';

export const configs: Record<string, TSESLint.Linter.ConfigType> = {
    'recommended-typescript': RecommendedTypescriptConfig,
    'recommended-html': RecommendedHtmlConfig,
    'html-formatting': FormattingHtmlConfig,
    recommended: RecommendedConfig,
    formatting: FormatConfig,
};
