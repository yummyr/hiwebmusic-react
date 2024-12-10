import styled from "styled-components";

export const FootWraper = styled.div`
  height: 200px;
  background-color: lightgray;

  .foot-nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  .foot-nav {
    font-size: 16px;
    justify-content: space-between;
    color: gray;
    transition: color 0.3s ease;
    margin-top: 20px; /* Proper margin */
  }
  .foot-nav:hover {
    color: black;
  }
  .foot-route {
    font-size: 14px;
    margin: 50px;
  }
`;
