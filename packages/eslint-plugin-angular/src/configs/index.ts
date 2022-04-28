import { RecommendedTypescriptConfig } from './recommended-typescript/recommended-typescript.config';
import { Linter } from 'eslint';
import { RecommendedHtmlConfig } from './recommended-html/recommended-html.config';
import { RecommendedConfig } from './recommended/recommended.config';

export const configs: Record<string, Linter.BaseConfig> = {
    'recommended-typescript': RecommendedTypescriptConfig,
    'recommended-html': RecommendedHtmlConfig,
    recommended: RecommendedConfig,
};
