import {signIn, signOut} from "next-auth/client";

import Header from "./";

type HeaderContainerProps = {
  session: Object;
};

const HeaderContainer = ({session}: HeaderContainerProps) => {
  const handleLogin = () => {
    signIn("cognito", {
      callbackUrl: `${window.location.origin}/dashboard`
    })
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <Header
      handleLogin={handleLogin} 
      handleLogout={handleLogout} 
      session={session} 
    />
  );
};

export default HeaderContainer;