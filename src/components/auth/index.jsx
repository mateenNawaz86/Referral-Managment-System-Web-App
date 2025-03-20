import { SignUp } from "./screens/sign-up";
import { Login } from "./screens/login-screen";
import { LandingPage } from "./screens/landing-page";
import { PhoneVarification } from "./screens/phone-verification";
import { useEffect, useState } from "react";

export const Auth = () => {
  const [currentScreen, setCurrentScreen] = useState("landing");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen("login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSignupSuccess = () => {
    setCurrentScreen("login");
  };

  const handleLoginSuccess = () => {
    setCurrentScreen("phone");
  };

  const handleBack = () => {
    setCurrentScreen("login");
  };

  const screens = {
    landing: <LandingPage />,
    signup: <SignUp onSignupSuccess={handleSignupSuccess} />,
    login: <Login onLoginSuccess={handleLoginSuccess} />,
    phone: <PhoneVarification onBack={handleBack} />,
  };

  return (
    <div className="flex items-center justify-center md:h-screen">
      {screens[currentScreen]}
    </div>
  );
};
