import styled, { css } from "styled-components";

import { styleProps } from "base/styles/helpers";

// TODO: export all dollar props (style props) to its own type
interface RowProps {
  $justifyContent?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;

  ${({ $justifyContent }) =>
    $justifyContent &&
    css`
      justify-content: ${$justifyContent};
    `};

  ${styleProps}
`;
