import styled, { css } from "styled-components";

import {
  FONT_FAMILY,
  BORDER_RADIUS,
  spacingPx,
  COLOR,
  FONT_SIZE,
} from "base/styles/helpers";
import {
  BUTTON_STYLE_VARIANTS,
  BUTTON_SIZE,
} from "base/components/button/utils/buttonConstants";

export interface ButtonProps {
  size?: keyof typeof BUTTON_SIZE;
  variant?: keyof typeof BUTTON_STYLE_VARIANTS;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${COLOR.primary};
  border-radius: ${BORDER_RADIUS.sm};
  border: none;
  color: ${COLOR.white};
  cursor: pointer;
  font-family: ${FONT_FAMILY.notoSans};
  font-size: ${FONT_SIZE.default};
  padding: ${spacingPx(1, 3)};

  ${(props) =>
    props.variant &&
    css`
      ${BUTTON_STYLE_VARIANTS[props.variant]}
    `}
`;
