import styled from "styled-components";

export const Container = styled.aside`
  position: absolute;
  top: 48px;
  left: 48px;
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 80%;
  overflow: hidden;
  border-radius: 8px;
  background-color: #222;

  button {
    padding: 16px 0;
    border: none;
    background-color: transparent;
    color: blueviolet;

    transition: background-color 200ms;

    &:hover {
      background-color: #111;
    }
  }
`;