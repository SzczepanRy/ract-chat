import React from "react";
import ReactDOM from "react-dom/client";
import App, { appLoader } from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login/Login.tsx";
import Main, { mainLoader } from "./main/Main.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        loader: appLoader,
        children: [{}],
    },
    {
        path: "/main",
        element: <Main />,
        loader: mainLoader,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
