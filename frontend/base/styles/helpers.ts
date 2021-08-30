import { join } from "lodash";
import { ThemedStyledProps } from "styled-components";

import { Size, Length } from "base/styles/types";

export const px = (size: number) => `${size}px`;

export const percent = (size: number) => `${size}%`;

const SPACING_UNIT = 8;

export const spacingPx = (...sizes: number[]) =>
  join(
    sizes.map((size) => px(size * SPACING_UNIT)),
    " "
  );

export const size = (size: string) => `
  height: ${size};
  width: ${size};
`;

export const BREAKPOINT: Partial<Record<Size, Length>> = {
  sm: px(576),
  md: px(768),
  lg: px(992),
  xl: px(1200),
  xxl: px(1400),
};

export const COLOR = {
  black: "#000000",
  danger: "#EB5757",
  gray: {
    lighter: "#F2F2F2",
    light: "#BDBDBD",
    default: "#828282",
    dark: "#4F4F4F",
    darker: "#333333",
  },
  primary: "#2F80ED",
  success: "#27AE60",
  white: "#FFFFFF",
};

export const FONT_SIZE: Partial<Record<Size, Length>> = {
  sm: spacingPx(1.5),
  default: spacingPx(1.75),
  md: spacingPx(2),
  lg: spacingPx(2.25),
  xl: spacingPx(3),
  xxl: spacingPx(4),
};

export const FONT_FAMILY = {
  notoSans: "'Noto Sans', sans-serif",
  poppins: "'Poppins', sans-serif",
};

export const FONT_WEIGHT: Partial<Record<Size, Length>> = {
  default: 400,
  md: 500,
  xl: 600,
  xxl: 700,
};

export const BORDER: Partial<Record<keyof typeof COLOR, any>> = {
  gray: {
    lighter: {
      sm: "",
    },
  },
};

export const BORDER_RADIUS: Partial<Record<Size, Length>> = {
  sm: px(4),
};

export const makeDeviceMediaBreakpoint =
  (breakpoint?: Length) => (css: TemplateStringsArray) =>
    `@media (max-width: ${breakpoint ?? 1200}){
    ${css}
}`;

export const smallDevice = makeDeviceMediaBreakpoint(BREAKPOINT.sm);

export const mediumDevice = makeDeviceMediaBreakpoint(BREAKPOINT.md);

export const largeDevice = makeDeviceMediaBreakpoint(BREAKPOINT.lg);

export const extraLargeDevice = makeDeviceMediaBreakpoint(BREAKPOINT.xl);

export const extraExtraLargeDevice = makeDeviceMediaBreakpoint(BREAKPOINT.xxl);

export const styleProps = (props: ThemedStyledProps<any, any>) => props.css;
