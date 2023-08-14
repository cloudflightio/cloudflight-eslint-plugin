import {ESLintUtils} from '@typescript-eslint/utils';

export const createRule = ESLintUtils.RuleCreator((name) => `https://github.com/cloudflightio/cloudflight-eslint-plugin/tree/main/packages/eslint-plugin-typescript/src/rules/${name}.ts`);
export const createPackageRule = ESLintUtils.RuleCreator((name) => `https://github.com/cloudflightio/cloudflight-eslint-plugin/tree/main/packages/eslint-plugin-typescript/src/rules/package/${name}.rule.ts`);
export const createTscRule = ESLintUtils.RuleCreator((name) => `https://github.com/cloudflightio/cloudflight-eslint-plugin/tree/main/packages/eslint-plugin-typescript/src/rules/ts-config/${name}.rule.ts`);
