import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {login as loginApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate: login, isLoading: isLoggingIn} = useMutation({
    mutationFn: ({email, password}) => loginApi({email, password}),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user); // save the login in the cache if logged in for a day
      toast.success("Logged in successfully🚪");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Invalid credentials for login.");
    },
  });

  return {login, isLoggingIn};
}
