import { Linter } from 'eslint';
import { RecommendedConfig } from './recommended/recommended.config';
import { RecommendedTypescriptConfig } from './recommended-typescript/recommended-typescript.config';
import { RecommendedJsonConfig } from './recommended-json/recommended-json.config';

export const configs: Record<string, Linter.BaseConfig> = {
    'recommended-typescript': RecommendedTypescriptConfig,
    'recommended-json': RecommendedJsonConfig,
    recommended: RecommendedConfig,
};
