import styled, { css } from "styled-components";

const Card = styled.textarea`
  padding: 1em;
  background: ${(props) =>
    props.id === 1
      ? "papayawhip"
      : props.id === 2
      ? "#b3ffff"
      : props.id === 3
      ? "#88ff4d"
      : "#dd99ff"};
  border-radius: 8px;
  height: 100px;
  margin: 25px;
`;

export default Card;
