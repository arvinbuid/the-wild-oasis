import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createUpdateCabin} from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useUpdateCabin() {
  const queryClient = useQueryClient();

  const {mutate: updateCabin, isLoading: isUpdating} = useMutation({
    mutationFn: ({newCabinData, id}) => createUpdateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited.");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return {updateCabin, isUpdating};
}
