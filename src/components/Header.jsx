import styled from "@emotion/styled";
import { Container } from "./customization/Container";
import { LinkBase } from "./customization/LinkBase";


const Wrapper = styled.div`
  height: 60px;
  background: #C8C8C8;
`
const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 36px;
  color: #272323;
  margin-left:168px;
`

export const Header = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <LinkBase to="/home"> e-stroi.kz</LinkBase>
      </StyledContainer>
    </Wrapper>
  )
}
