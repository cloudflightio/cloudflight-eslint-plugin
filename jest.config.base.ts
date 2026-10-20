import type {Config} from 'jest';

export const baseJestConfig: Config = {
    preset: 'ts-jest/presets/default',
    testEnvironment: 'node',
    roots: ['./src/'],
    setupFiles: ['<rootDir>/../../jest.setup.ts'],
    // the config tests start a type-aware eslint, 5s is not enough
    testTimeout: 60_000,
    // typescript-eslint's project service keeps a tsserver timer running after the tests,
    // with more than one worker jest then warns about a worker that does not exit
    maxWorkers: 1,
};
