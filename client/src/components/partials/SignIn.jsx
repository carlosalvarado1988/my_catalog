import React from "react";
import styled from "styled-components";

export const SignIn = () => (
  <Wrapper>
    <div className="signin-content">
      <form className="signin-form">
        <div>
          <label htmlFor="username" className="label">
            Email:
          </label>
          <input id="username" type="text" required></input>
        </div>
        <div>
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input id="password" type="password" required></input>
        </div>
        <div className="submit-box">
          <button className="cancel-button">Cancel</button>
          <input className="submit-button" type="submit" value="Sign in" />
        </div>
      </form>

      <div className="signup-box">
        <p className="label">Not a member yet?</p>
        <button className="signup-button">Sign up</button>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: var(--text-size-web);
  height: 100%;
  box-sizing: border-box;

  .signin-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .signin-form {
    width: 100%;
    max-width: 400px;
    div {
      margin: 20px auto;
    }
  }

  .label {
    font-size: 2.5rem;
  }

  #username,
  #password {
    display: block;
    width: 100%;
    max-width: 400px;
    height: 40px;
    margin-top: 10px;
    border: 0;
    font-size: 2.5rem;
    box-sizing: border-box;
  }
  .submit-box {
    text-align: right;
  }
  .cancel-button {
    height: 40px;
    width: 80px;
    font-size: 1.8rem;
    border: 0;
    box-sizing: border-box;
  }
  .submit-button {
    height: 40px;
    width: 120px;
    margin-left: 5px;
    font-size: 1.8rem;
    box-sizing: border-box;
    border: 0;
  }

  .signup-box {
    margin-top: 60px;
  }
  .signup-button {
    display: block;
    width: 100%;
    margin-top: 15px;
    height: 40px;
    font-size: 2rem;
    border: 0;
  }

  @media (max-width: 600px) {
    #username,
    #password,
    .label,
    .cancel-button,
    .submit-button,
    .signup-button {
      font-size: 1.5rem;
    }
  }
`;
