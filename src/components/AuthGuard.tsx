import React, { useEffect } from "react";
import { useHistory } from "@docusaurus/router";

function isAuthenticated() {
  return document.cookie.includes("isAuth=true");
}

export default function AuthGuard({ children }) {
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated()) {
      history.push("/auth");
    }
  }, []);

  return <>{children}</>;
}
