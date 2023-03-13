import styled from "styled-components";
import FormLogin from "../components/formLogin";
import Logo from "../components/logo";

export default function LoginPage(){
    return(
        <StyledSection>
            <FormLogin/>
            <Logo/>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    max-width: 100vw;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 62px;

    @media (max-width: 768px){
        min-height: 100vh;
        height: 100%;
        flex-direction: column-reverse;
        padding: 40px 20px 0;
        gap: 0;
    }
`