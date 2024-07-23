import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { LoginRoute } = await import("./login");
        return { Component: LoginRoute };
      },
    },
  ]);
