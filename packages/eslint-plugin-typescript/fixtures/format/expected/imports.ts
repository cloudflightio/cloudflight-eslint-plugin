import type {Linter} from 'eslint';

import {ESLint} from 'eslint';

import {api} from '../../imports/modules/api';
import {state} from '../../imports/modules/initialize';

export const all = [api, state, ESLint];
export type Config = Linter.Config;
