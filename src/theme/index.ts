import { DefaultTheme } from 'styled-components';
import db from 'db.json'

// https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3
export const appTheme: DefaultTheme = {
  colors: db.theme.colors,
  borderRadius: db.theme.borderRadius,
}
