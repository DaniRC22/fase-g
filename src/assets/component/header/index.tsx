import styled from "styled-components";
import Header from "./header.component";

export default styled(Header)`
  background-color: black;
  padding: 15px 0; 
  text-align: center;

  nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav {
    display: flex;
    gap: 20px;
  }

  a {
    z-index:3;
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: red;
    }
  }
`


