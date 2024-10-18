import BlogsHero from "@/components/Sections/BlogsHero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Asasy-Login",
  description: "marketing and business solutions",
  icons: {
    icon: "../icons/dark-logo.png",
  },
  // other metadata
};

function Login() {
  return (
    <div>
      <BlogsHero title={"Login"} bgColor="bg-green-300" />
    </div>
  );
}

export default Login;
