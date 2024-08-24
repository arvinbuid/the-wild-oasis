import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteBooking as deleteBookingApi} from "../../services/apiBookings";

import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate: deleteBooking, isLoading: isDeleting} = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted.");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      navigate("/bookings");
    },
    onError: (err) => toast.error(err.message),
  });

  return {isDeleting, deleteBooking};
}
