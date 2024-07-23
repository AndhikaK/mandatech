import "@mantine/core/styles.css";
import React, { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <MantineProvider>
      <React.Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            <span>Loading</span>
          </div>
        }
      >
        {children}
      </React.Suspense>
    </MantineProvider>
  );
}
