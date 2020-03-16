import * as types from './types';

export const setTheme = (): SetThemeAction => ({
  type: types.SET_THEME
});
interface SetThemeAction {
  type: typeof types.SET_THEME;
}
