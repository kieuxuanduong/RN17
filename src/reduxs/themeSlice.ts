import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IThemeState {
  backgroundColor: string;
  color: string;
  isThemeLight: boolean;
}

export const lightTheme: IThemeState = {
  backgroundColor: '#fff',
  color: '#000',
  isThemeLight: true,
};
export const darkTheme: IThemeState = {
  backgroundColor: '#000',
  color: '#fff',
  isThemeLight: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: lightTheme,
  reducers: {
    onUpdateTheme: (state, action: PayloadAction<IThemeState>) => {
      state.backgroundColor = action.payload.backgroundColor;
      state.color = action.payload.color;
      state.isThemeLight = action.payload.isThemeLight;
    },
  },
});

// Action creators are generated for each case reducer function
export const {onUpdateTheme} = themeSlice.actions;

export default themeSlice.reducer;
