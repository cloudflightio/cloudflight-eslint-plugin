import {Linter} from 'eslint';

import {RecommendedConfig} from './recommended/recommended.config';

export const configs: Record<string, Linter.BaseConfig> = {
    recommended: RecommendedConfig,
};
