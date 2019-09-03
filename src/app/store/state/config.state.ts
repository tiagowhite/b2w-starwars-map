import {Config} from '../../models/config';

export interface ConfigState {
  config: Config;
  error: string;
}

export const initialConfigState: ConfigState = {
  config: null,
  error: null
};
