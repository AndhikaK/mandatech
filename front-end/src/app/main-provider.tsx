import React, { PropsWithChildren } from "react";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <span>Loading</span>
        </div>
      }
    >
      {children}
    </React.Suspense>
  );
}
