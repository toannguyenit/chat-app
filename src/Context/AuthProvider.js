import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authentication } from "../firebase/config";
import { Spin } from "antd";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscibed = authentication.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
        console.log(user);
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/");
      } else {
        navigate("/login");
      }
    });

    // Clean function
    return () => {
      unsubscibed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
