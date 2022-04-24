import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background:             string;
      backgroundFlat:         string;
      backgroundDark:         string;
      border:                 string;
      primary:                string;
      primaryLight:           string;
      primaryDark:            string;
    }
  }
}
