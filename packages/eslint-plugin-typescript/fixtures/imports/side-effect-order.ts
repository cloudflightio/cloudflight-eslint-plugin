// api sorts in front of initialize, but consume needs the state that initialize sets up
import {state} from './modules/initialize';
import './modules/consume';
import {api} from './modules/api';

export const ready = [state, api];
