import {ESLintUtils} from '@typescript-eslint/utils';

export const createRule = ESLintUtils.RuleCreator((name) => `https://github.com/cloudflightio/cloudflight-eslint-plugin/tree/main/packages/eslint-plugin-typescript/src/rules/typescript/${name}.ts`);
