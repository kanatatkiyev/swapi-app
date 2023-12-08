import type { Config } from 'jest';

const config: Config = {
    bail: 1,
    clearMocks: true,
    preset: 'ts-jest',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'babel',
    modulePathIgnorePatterns: ['<rootDir>/build/'],
    roots: ['<rootDir>/src/'],
    testEnvironment: 'jsdom',
    verbose: true,
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/']
};

export default config;
