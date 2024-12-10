import styled from "styled-components";

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .button {
    height: 2rem;
    border-radius:90%;
    margin: 0.5rem;
    color: white;
    background-color: #1e293b;
  }
`;
export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    background-color: black;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;
