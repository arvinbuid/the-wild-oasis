import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {login as loginApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate: login, isLoading: isLoggingIn} = useMutation({
    mutationFn: ({email, password}) => loginApi({email, password}),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user); // save the login in the cache
      toast.success("Logged in successfully.");
      navigate("/dashboard", {replace: true});
    },
    onError: (err) => {
      if (err.message.includes("verify your email")) {
        toast.error("Please verify your email address before logging in.");
      } else {
        toast.error("Provided email or password are incorrect");
      }
    },
  });

  return {login, isLoggingIn};
}
