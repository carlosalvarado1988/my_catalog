import React from "react";
import styled from "styled-components";

export const FooterContainer = () => (
  <Wrapper>
    <div className="footer-content">
      <button>Comprar</button>
    </div>
  </Wrapper>
);

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: var(--bar-height-web);
  background-color: var(--bg-color);
  color: lightcyan;
  border-top: 1px solid lightcoral;
  box-sizing: border-box;
  .footer-content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--max-width-content);
    padding: 15px 30px;
    box-sizing: border-box;
    button {
      height: 50px;
      float: right;
      background: red;
      /* color: var(--text-color); */
      width: 90px;
      height: 40px;
      padding: 5px;
      border: 5px solid var(--bg-color);
      cursor: pointer;

      :hover,
      :focus {
        outline: 2px solid red;
        opacity: 0.5;
      }
    }
  }

  @media (max-width: 600px) {
    height: var(--bar-height-web-mobile);
    .footer-content {
      padding: 5px 10px;
    }
  }
`;
