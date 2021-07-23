import {signIn, signOut} from "next-auth/client";

import Header from "./";

type HeaderContainerProps = {
  session: Object;
  alternative: boolean,
};

const HeaderContainer = ({session, alternative}: HeaderContainerProps) => {
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
      alternative={alternative}
    />
  );
};

export default HeaderContainer;