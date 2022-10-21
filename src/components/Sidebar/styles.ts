import styled from "styled-components";

export const Container = styled.aside`
  position: absolute;
  top: 48px;
  left: 48px;
  height: 80%;
  border-radius: 8px 0 0 8px;

  .dynamic-panel {
    height: 100%;
    border-radius: 12px 8px 8px 12px;
    /* border-radius: 8px; */
    overflow: hidden;
  }

  nav {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
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
  }
`;