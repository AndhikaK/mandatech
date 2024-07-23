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
    {
      path: "/admin/dashboard",
      lazy: async () => {
        const { AdminDashboardRoute } = await import("./admin/dashboard");
        return { Component: AdminDashboardRoute };
      },
    },
  ]);
