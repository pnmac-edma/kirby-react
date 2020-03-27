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

export const setFormSubmitOnBlur = (
  jobName: string
): SetFormSubmitOnBlurAction => ({
  type: types.SET_FORM_SUBMIT_ON_BLUR,
  jobName
});
interface SetFormSubmitOnBlurAction {
  type: typeof types.SET_FORM_SUBMIT_ON_BLUR;
  jobName: string;
}
