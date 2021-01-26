import 'styled-components';
import db from 'db.json'

// https://github.com/hstrada/workshop-rocketseat-stylert-boilerplate/tree/master/Stylert/src/theme
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof db.theme.colors;
    borderRadius: typeof db.theme.borderRadius
  }
}