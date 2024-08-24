import styled from "styled-components";
import {useUser} from "../features/authentication/useUser";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({children}) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const {isLoadingUser, isAuthenticated} = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) navigate("/login");
  }, [isAuthenticated, isLoadingUser, navigate]);

  // 3. While loading, show a spinner
  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
