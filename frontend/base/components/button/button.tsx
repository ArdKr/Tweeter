import styled, { css } from "styled-components";

import {
  FONT_FAMILY,
  BORDER_RADIUS,
  spacingPx,
  COLOR,
  FONT_SIZE,
} from "base/styles/helpers";
import { BUTTON_STYLE_VARIANTS } from "base/components/button/utils/buttonConstants";

export interface ButtonProps {
  variant?: keyof typeof BUTTON_STYLE_VARIANTS;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${COLOR.primary};
  color: ${COLOR.white};
  border-radius: ${BORDER_RADIUS.sm};
  border: none;
  cursor: pointer;
  font-family: ${FONT_FAMILY.notoSans};
  padding: ${spacingPx(1, 3)};
  font-size: ${FONT_SIZE.default};

  ${(props) =>
    props.variant &&
    css`
      ${BUTTON_STYLE_VARIANTS[props.variant]}
    `}
`;
