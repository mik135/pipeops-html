import { useState } from "react";
import { supabase } from "../supabase/init";
import { useAuthStore } from "../stores/authStore";
import LoginDivider from "../components/LoginDivider";
import googlepic from "../assets/google.svg";
import { Link, Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false)
  const { setUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(state => !state)

    // TODO: Make Confirm Password check dynamically before submitting
    if (confirmPassword != password) {
      setPasswordError((passwordError) => !passwordError);
    } else {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        console.error(error);
      } else {
        setUser(user);
        // Redirect to login page
        <Navigate to="/confirm" />;
      }
    }
  };

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      alert("Unable to log in with google");
    } else {
      setUser(data);
      setIsLoggedIn(true);
      // Redirect to workspace dashboard
      <Navigate to="/dashboard" />
    }
  };

  // ... form JSX
  return (
  <main className="flex flex-col items-center gap-10">
    <h1 className="text-4xl mx-10 mt-5 mb-2 self-start">
      Space<span className="text-orange-700">ly</span>
    </h1>
    <div className="shadow-2xl flex flex-col w-[90%] sm:w-[450px] p-10 rounded-md">
      <h2 className="text-4xl font-semibold">Sign Up</h2>
      <p className="mb-5 text-lg">Time to get in the zone.</p>
      {passwordError ? (
        <p className="bg-yellow-500 text-white p-2 rounded-md mb-3">
          Passwords do no match
        </p>
      ) : (
        <p></p>
      )}
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
      <input
        type="password"
        name="password"
        className="text-xl p-2 rounded-md mb-5 border-[2px] outline-2 outline-orange-300"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <h4 className="font-medium text-lg">
        Have an account? <Link to="/login" className="text-orange-700 underline underline-offset-2 cursor-pointer">Login</Link>
      </h4>

      <button
        className="flex gap-3 items-center justify-center rounded-3xl mt-5 h-[50px] bg-orange-700 text-white hover:bg-orange-800 focus:bg-white border-orange-700 border-[2px] focus:text-orange-700 font-medium"
        onClick={handleSubmit}
      >
        <ClipLoader
        color="orange"
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
        size={20}
      />
        Sign Up
      </button>
      <LoginDivider />
      <button
        className="w-full border-[2px] flex justify-center items-center h-[50px] gap-3 rounded-3xl font-medium focus:text-green-300 focus:border-green-400"
        onClick={handleGoogleLogin}
      >
        <img src={googlepic} alt="google logo" className="w-7" />
        Sign up with Google
      </button>
    </div>
  </main>)
};

export default Signup;
