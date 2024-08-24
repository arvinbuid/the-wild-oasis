import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {login as loginApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const {mutate: login, isLoading: isLoggingIn} = useMutation({
    mutationFn: ({email, password}) => loginApi({email, password}),
    onSuccess: (user) => {
      toast.success("Logged in successfully🚪");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Invalid credentials for login.");
    },
  });

  return {login, isLoggingIn};
}
