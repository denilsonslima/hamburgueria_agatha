import FormLogin from "../../components/FormSignIn";
import Logo from "../../components/Logo";
import { StyledSection } from "../../components/Form/styles";

export default function SignIn(){
    return(
        <StyledSection>
            <FormLogin/>
            <Logo/>
        </StyledSection>
    )
}