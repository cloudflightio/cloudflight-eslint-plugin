import {TSESLint} from '@typescript-eslint/utils';

import {RecommendedConfig} from './recommended/recommended.config';
import {RecommendedJsonConfig} from './recommended-json/recommended-json.config';
import {RecommendedPackageConfig} from './recommended-package/recommended-package.config';
import {FormattingTypescriptConfig, RecommendedTypescriptConfig} from './recommended-typescript/recommended-typescript.config';

export const configs: Record<string, TSESLint.Linter.Config> = {
    formatting: FormattingTypescriptConfig,
    'recommended-typescript': RecommendedTypescriptConfig,
    'recommended-json': RecommendedJsonConfig,
    'recommended-package': RecommendedPackageConfig,
    recommended: RecommendedConfig,
};
