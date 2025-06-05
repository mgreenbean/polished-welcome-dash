
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Page Not Found</h2>
        <p className="text-blue-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
