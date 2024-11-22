"use client";

import { useState } from "react";

import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  // 1C325B

  return (
    <div className="h-full flex items-center justify-center bg-[#1c325B]">
      <div className="md h-auto md:w-[420px]">
        <div>
          {state === "signIn" ? (
            <SignInCard setState={setState} />
          ) : (
            <SignUpCard setState={setState} />
          )}
        </div>
      </div>
    </div>
  );
};
