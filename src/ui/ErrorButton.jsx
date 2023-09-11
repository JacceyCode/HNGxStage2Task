/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function ErrorButton({ children }) {
  const navigate = useNavigate();

  //   const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  return (
    <button className="" onClick={() => navigate(-1)}>
      {children}
    </button>
  );
}

export default ErrorButton;
