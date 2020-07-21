import styled from "styled-components";

export const Label = styled.label`
  font-style: italic;
  font-size: 14px;
  width: 104px;
  margin-right: 8px;
`;

export const Clear = styled.button.attrs({
  children: "✕",
  title: "Clear"
})`
  border: none;
  padding: 0;
  margin-left: 8px;
  cursor: pointer;
`;
