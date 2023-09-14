/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function ErrorButton({ children }) {
  const navigate = useNavigate();

  return (
    <button className="" onClick={() => navigate("/")}>
      {children}
    </button>
  );
}

export default ErrorButton;
