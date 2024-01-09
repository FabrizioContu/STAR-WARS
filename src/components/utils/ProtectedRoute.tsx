import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../../Context/Context";

const ProtectedRoute = ({
  user,
  children,
}: {
  user: boolean;
  children: any;
}): JSX.Element => {
  const { isLoggedIn } = useContext(Context);
  console.log("isLoggedIn:", isLoggedIn);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
