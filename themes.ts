export interface Theme {
  BackgroundMain: string
  BackgroundAccent: string
  TextColour: string
  ForegroundColour: string
  ForegroundAccent1: string
  ForegroundAccent2: string
  MenuBtnCol: string
  MenuUnderline: string
}

const ThemeMain: Theme = {
  BackgroundMain: '#1e1e1e',
  BackgroundAccent: '#303030',
  TextColour: 'white',
  ForegroundColour: '#217bf3',
  ForegroundAccent1: '#388dff',
  ForegroundAccent2: '#5ea3ff',
  MenuBtnCol: 'white',
  MenuUnderline: '#217bf3',
}

const LightTheme: Theme = {
  BackgroundMain: '#217bf3',
  BackgroundAccent: '#e4e4e4',
  TextColour: 'black',
  ForegroundColour: '#1155b0',
  ForegroundAccent1: '#3889f6',
  ForegroundAccent2: '#74acf8',
  MenuBtnCol: 'white',
  MenuUnderline: 'white',
}

export const appThemes = [ThemeMain, LightTheme]
