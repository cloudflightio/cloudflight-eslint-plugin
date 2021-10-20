import { RecommendedConfig } from './recommended.config';
import { Linter } from 'eslint';

export const configs: Record<string, Linter.BaseConfig> = {
    recommended: RecommendedConfig,
};
