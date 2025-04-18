import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import { fetchFunction } from "../utils/fetchFunction";
import { LOGIN_USER, SIGN_UP_USER } from "../utils/constant";
import Loader from "../components/Loader";

export default function LoginSignUp() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setGlobalIsAdmin } = useContext(GlobalContext);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loaderState,setLoaderState] = useState(false);

  const handleSignUporLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (isSignUp && password !== confirmPass)
      return setError("Passwords do not match");

    setLoaderState(true);
    const isAdmin = pathname === "/admin";
    const data = isSignUp
      ? { fullName, email, password, isAdmin }
      : { email, password };

    const response = await fetchFunction({
      crudMethod: "POST",
      fetchingUrl: isSignUp ? SIGN_UP_USER : LOGIN_USER,
      setError,
      data,
    });

    if (response) {
      setGlobalIsAdmin(
        isSignUp ? response?.newUser?.isAdmin : response?.user?.isAdmin
      );
      setLoaderState(false);
      sessionStorage.setItem('user',JSON.stringify(isSignUp ? response?.newUser: response?.user))
      navigate("/home");
    }
  };

  return (
    <>
      {
        loaderState 
        ? <Loader text={"Wait a Moment"}/>
        :
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-900 p-4">
      <div className="bg-white dark:bg-neutral-800 shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          {isSignUp ? "Sign Up" : "Login"}
        </h1>
        <form onSubmit={handleSignUporLogin} className="flex flex-col gap-4">
          {isSignUp && (
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              required
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {isSignUp && (
            <input
              onChange={(e) => setConfirmPass(e.target.value)}
              value={confirmPass}
              required
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          {error && (
            <p className="text-sm text-red-500 font-medium text-center">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="mt-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors duration-300"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="mt-6 text-sm cursor-pointer text-blue-500 hover:text-blue-600 transition-colors duration-300 underline w-full text-center"
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
      }
    </>
  );
}
