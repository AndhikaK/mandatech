import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { LoginRoute } = await import("./auth/login");
        return { Component: LoginRoute };
      },
    },
  ]);
