import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;

  @media (min-width: 0px) and (max-width: 991.98px) {
    max-width: 960px;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1110px;
  }  
`

export default Container