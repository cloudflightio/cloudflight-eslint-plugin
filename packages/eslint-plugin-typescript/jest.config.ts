import type {Config} from 'jest';

import {baseJestConfig} from '../../jest.config.base.ts';

const jestConfig: Config = {
    ...baseJestConfig,
};

export default jestConfig;
