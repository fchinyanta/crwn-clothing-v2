import SignUpForm from "../../components/sign-up-form/sing-up-form.component";
import SignInForm from "../../components/sign-in-form/sing-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
