import { createSelector } from 'reselect';

export const getUIState = state => state.ui;
export const getUIStatus = createSelector(getUIState, ({ status }) => status);
