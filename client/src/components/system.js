import styled from "styled-components";

export const Label = styled.label`
  font-style: italic;
  font-size: 14px;
  width: 104px;
  margin-right: 8px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  background-color: #eee;
  padding: 8px 16px;
  margin: 8px 0;
  box-shadow: 0px 0px 3px #aaa;
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

export const GoBack = styled.span.attrs({ children: "← Go back" })`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
