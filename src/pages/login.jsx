import FormLogin from "../components/Fragments/Auth/FormLogin";
import AuthLayouts from "../components/Layouts/Auth/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
