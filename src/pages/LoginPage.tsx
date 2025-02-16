import { useRef, useState, forwardRef } from "react";
import { useUserContext } from "../utils/UserContext";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

const LoginPage = () => {
  const [isUser, setIsUser] = useState(true);
  const [isForget, setIsForget] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, register, update } = useUserContext();

  const nameInput = useRef<HTMLInputElement | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);
  const confirmPasswordInput = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isForget) {
        const email = emailInput.current?.value;
        const password = passwordInput.current?.value;
        const confirmPassword = confirmPasswordInput.current?.value;

        if (
          email &&
          password &&
          confirmPassword &&
          password === confirmPassword
        ) {
          await update(email, { password });
          alert("Password updated successfully!");
          setIsForget(false);
          setIsUser(true);
        } else {
          alert("Passwords do not match!");
        }
      } else if (isUser) {
        const email = emailInput.current?.value;
        const password = passwordInput.current?.value;

        if (email && password) {
          await login(email, password);
          alert("Login successful!");
        } else {
          alert("Please enter email and password.");
        }
      } else {
        const name = nameInput.current?.value;
        const email = emailInput.current?.value;
        const password = passwordInput.current?.value;

        if (name && email && password) {
          await register(name, email, password);
          alert("Registration successful!");
          setIsUser(true);
        } else {
          alert("All fields are required!");
        }
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-[#FAE5C3] p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center">
          {isForget
            ? "Reset Password"
            : isUser
            ? "Welcome Back!"
            : "Create an Account"}
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isUser && !isForget && (
            <InputField
              label="Name"
              type="text"
              placeholder="Your Name"
              ref={nameInput}
              required
            />
          )}
          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            ref={emailInput}
            required
          />

          {!isForget && (
            <PasswordField
              label="Password"
              ref={passwordInput}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
          {isForget && (
            <PasswordField
              label="Confirm Password"
              ref={confirmPasswordInput}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#E59622] text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            {isForget ? "Reset Password" : isUser ? "Login" : "Register"}
          </button>
        </form>

        {!isForget && (
          <p className="text-center text-sm text-gray-600">
            {isUser ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsUser(!isUser)}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              {isUser ? "Sign up" : "Sign in"}
            </span>
          </p>
        )}
        <p
          className="text-center text-sm text-gray-600 cursor-pointer hover:underline"
          onClick={() => {
            setIsForget(!isForget);
            setIsUser(true);
          }}
        >
          {isForget ? "Back to Login" : "Forgot Password?"}
        </p>
      </div>
    </main>
  );
};

// Define TypeScript interfaces for props
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

// Forward ref for proper reference handling
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type, placeholder, required = false }, ref) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        required={required}
        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
      />
    </div>
  )
);

interface PasswordFieldProps {
  label: string;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

// Forward ref for password field
const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, showPassword, setShowPassword }, ref) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={label}
          ref={ref}
          required
          className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
        >
          {showPassword ? <GoEyeClosed /> : <RxEyeOpen />}
        </button>
      </div>
    </div>
  )
);

export default LoginPage;
