import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="container py-24">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
        <p className="mt-3 text-lg text-muted-foreground">This page doesn’t exist or was moved.</p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-[#5170FF] to-[#5D17EB] px-6 text-white shadow hover:from-[#3C72FC] hover:to-[#5D17EB]"
          >
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
