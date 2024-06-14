import React from "react";
import googlepic from "../assets/google.svg";
import LoginDivider from "../components/LoginDivider";
import { useState } from "react";
import { supabase } from "../supabase/init";
import { useAuthStore } from "../stores/authStore";
import { Link, Navigate } from "react-router-dom";

function LoginPage() {

  // User Related State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setIsLoggedIn } = useAuthStore();
  const [loginWithPasswordError, setLoginWithPasswordError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        setLoginWithPasswordError(true)
        console.log(error)
    } else {
      setUser(user);
      setIsLoggedIn(user);
      // Redirect to workspace dashboard
      <Navigate to="/dashboard" />
    }
  };

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
    })
      
    if (error) {
      console.error(error);
    } else {
      setUser(data);
      setIsLoggedIn(data);
      // Redirect to workspace dashboard
      <Navigate to="/dashboard" />
    }
  };

  return (
    <main className="flex flex-col items-center gap-10">
      <h1 className="text-4xl mx-10 mt-5 mb-2 self-start">
        Space<span className="text-orange-700">ly</span>
      </h1>
      <div className="shadow-2xl flex flex-col w-[90%] sm:w-[450px] p-10 rounded-md">
        <h2 className="text-4xl font-semibold">Sign in</h2>
        <p className="mb-5 text-lg">Time to get in the zone.</p>
        {loginWithPasswordError ? <p className="bg-yellow-500 text-white p-2 rounded-md mb-3">Incorrect Details<br />Check your details again or <Link to="/signup"><span className="text-blue-400 underline underline-offset-2 cursor-pointer">Sign Up</span></Link></p> : <p></p>}
        <input
          type="email"
          name="email"
          className="text-xl p-2 rounded-md mb-5 border-[2px] outline-2 outline-orange-300"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className="text-xl p-2 rounded-md mb-5 border-[2px] outline-2 outline-orange-300"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <h4 className="text-orange-700 font-medium text-lg">
          Forgot password?
        </h4>

        <button className="rounded-3xl mt-5 h-[50px] bg-orange-700 text-white hover:bg-orange-800 focus:bg-white border-orange-700 border-[2px] focus:text-orange-700 font-medium" onClick={handleSubmit}>
          Sign in
        </button>
        <LoginDivider />
        <button
          className="w-full border-[2px] flex justify-center items-center h-[50px] gap-3 rounded-3xl font-medium focus:text-green-300 focus:border-green-400"
          onClick={handleGoogleLogin}
        >
          <img src={googlepic} alt="google logo" className="w-7" />
          Sign in with Google
        </button>
      </div>
      <h3 className="text-lg font-medium">
        New to Spacely? <Link to="/signup"><span className="text-orange-700 underline underline-offset-2 cursor-pointer">Join Now</span></Link>
      </h3>
    </main>
  );
}

export default LoginPage;
