"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { message } from "antd";

const FormLogin: React.FC = () => {
  const route = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        route.push("/admin");
        message.success("Вы успешно вошли в админ панель!");
      } else {
        message.error("Неверное имя пользователя или пароль!");
        setError("Неверное имя пользователя или пароль");
      }
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-36 w-full">
      <div className="bg-white rounded-lg">
        <h1 className="text-font-black font-extralight text-lg text-center mb-4">
          Вход в админ панель магазина!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-font-black block text-sm mb-2">
              Username
            </label>
            <input
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-font-black block text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-1 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
