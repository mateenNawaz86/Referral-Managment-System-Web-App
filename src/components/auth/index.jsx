import { Login } from "./screens/login-screen";
import { PhoneVarification } from "./screens/phone-verification";
import { SignUp } from "./screens/sign-up";

export const Auth = () => {
  return (
    <div className="flex items-center justify-center md:h-screen">
      {/* <LandingPage /> */}

      {/* <Login /> */}
      {/* <PhoneVarification /> */}
      <SignUp />
    </div>
  );
};
