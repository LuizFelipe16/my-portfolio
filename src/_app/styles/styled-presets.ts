import { appVariables } from "../app";

const size = (multiplier: number) => `${multiplier * appVariables.size.MULTIPLIER}${appVariables.size.UNITY}`

export const styledPresets = {
  debugger: 'border: 1px solid red;',
  presets: {
    debugger: 'border: 1px solid red;',
  },

  centerRow: `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `,

  centerColumn: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `,

  row: {
    centerStart: `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    `,
    centerEnd: `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    `,
    startStart: `
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    `,
    startEnd: `
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
    `,
    endEnd: `
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;
    `,
    endStart: `
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
    `,
  },

  column: {
    // NOTE alignJustify
    centerCenter: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    centerStart: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `,
    centerEnd: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    `,
    startStart: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    `,
    startEnd: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
    `,
    startCenter: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `,
    endEnd: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    `,
    endStart: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
    `,
    endCenter: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
    `,
  },

  font: {
    size: size,
  },

  spacing: {
    size: size,
  },

  padding: {
    p1: `padding: ${size(1)}`,
    p2: `padding: ${size(2)}`,
    p3: `padding: ${size(3)}`,

    vertical: {
      p1: `
        padding-bottom: ${size(1)};
        padding-top: ${size(1)};
      `,
      p2: `
        padding-bottom: ${size(2)};
        padding-top: ${size(2)};
      `,
    }
  }
};
