import React, { JSX, lazy, Suspense } from "react";
import AuthGuard from "../components/AuthGuard";

// Lazy load ChatWidget for better performance
const ChatWidget = lazy(() => import("./components/ChatWidget"));

export default function Root({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const isDocsPage =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/docs");

  return (
    <>
      {isDocsPage ? <AuthGuard>{children}</AuthGuard> : children}

      <Suspense fallback={<p>loading...</p>}>
        <ChatWidget />
      </Suspense>
    </>
  );
}
