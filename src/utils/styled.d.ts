import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background100:          string;
      background80:           string;
      background60:           string;
      background40:           string;
      border:                 string;
      primary100:             string;
      primary80:              string;
      primary60:              string;
      textPrimary:            string;
      textSecondary:          string;
    }
  }
}
