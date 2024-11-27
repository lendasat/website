import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="max-w-md w-full space-y-8 bg-white shadow-xl rounded-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle
            className="text-red-500"
            size={64}
            strokeWidth={1.5}
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but an unexpected error has occurred.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700 italic">
            {errorMessage}
          </p>
        </div>
        <Button
          onClick={() => navigate("/")}
          className="w-full"
          variant="default"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
