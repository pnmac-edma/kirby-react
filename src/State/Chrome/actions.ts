import * as types from './types';

export const setTheme = (): SetThemeAction => ({
  type: types.SET_THEME
});
interface SetThemeAction {
  type: typeof types.SET_THEME;
}

export const setJobName = (jobName: string): SetJobNameAction => ({
  type: types.SET_JOB_NAME,
  jobName
});
interface SetJobNameAction {
  type: typeof types.SET_JOB_NAME;
  jobName: string;
}

export const setDefaultJobNameOnBlur = (
  jobName: string
): SetDefaultJobNameOnBlurAction => ({
  type: types.SET_DEFAULT_JOB_NAME_ON_BLUR,
  jobName
});
interface SetDefaultJobNameOnBlurAction {
  type: typeof types.SET_DEFAULT_JOB_NAME_ON_BLUR;
  jobName: string;
}
