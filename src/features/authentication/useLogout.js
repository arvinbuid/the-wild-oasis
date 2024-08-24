import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {logout as logoutApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {mutate: logout, isLoading: isLoggingOut} = useMutation({
    mutationFn: () => logoutApi,
    onSuccess: () => {
      localStorage.removeItem("sb-dzvzphczalsmiclfphyv-auth-token");
      toast.success("Logged out successfully");
      queryClient.removeQueries();
      navigate("/login", {replace: true});
    },
    onError: () => {
      toast.error("There was a problem logging out.");
    },
  });

  return {logout, isLoggingOut};
}
