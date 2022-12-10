import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 15px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0px;
      gap: 2px;

      label {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 17px;
      }

      input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px 10px;

        color: #000000;
        border: 1px solid #b4bbc2;
        border-radius: 5px;

        font-weight: 400;
        font-size: 0.75rem;
        line-height: 15px;

        height: 35px;
      }
    }

    button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px 22px;

      height: 35px;

      background: #b10232;
      border: 0px;
      border-radius: 30px;

      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #fff;
    }
  }
`;
