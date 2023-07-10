import type {Linter} from 'eslint';
import {RecommendedConfig} from './recommended/recommended.config';
import {FormattingTypescriptConfig, RecommendedTypescriptConfig} from './recommended-typescript/recommended-typescript.config';
import {RecommendedJsonConfig} from './recommended-json/recommended-json.config';
import {RecommendedPackageConfig} from './recommended-package/recommended-package.config';

export const configs: Record<string, Linter.BaseConfig> = {
    'recommended-typescript': RecommendedTypescriptConfig,
    'typescript-formatting': FormattingTypescriptConfig,
    'recommended-json': RecommendedJsonConfig,
    'recommended-package': RecommendedPackageConfig,
    recommended: RecommendedConfig,
};
