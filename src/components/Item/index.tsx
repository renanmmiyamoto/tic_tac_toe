import React from "react";

import { Container } from "./styles";

export interface Props {
  onPress: () => void;
  value: "X" | "O" | "";
  disabled: boolean;
}

const Item: React.FC<Props> = ({ onPress, value, disabled }) => {
  return (
    <Container onClick={onPress} disabled={disabled} value={value}>
      <span>{value}</span>
    </Container>
  );
};

export default Item;
