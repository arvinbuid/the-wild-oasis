import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateCurrentUser} from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const {mutate: updateUser, isLoading: isUpdatingUser} = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("User successfully updated.");
      //   queryClient.setQueryData("user", user);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return {updateUser, isUpdatingUser};
}
