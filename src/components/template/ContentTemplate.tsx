import styled from "styled-components";

const StyledContentTemplate = styled.div`
  width: 1024px;
  height: 300px;
  background: #e1e1e1;
  margin: 0 auto;
  position: relative;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ContentTemplate = ({ children }: { children: JSX.Element }) => {
  return <StyledContentTemplate>{children}</StyledContentTemplate>;
};
export default ContentTemplate;