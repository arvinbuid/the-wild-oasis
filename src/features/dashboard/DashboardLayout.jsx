import {useRecentBookings} from "./useRecentBookings";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import {useRecentStays} from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const {bookings, isLoadingRecentBookings} = useRecentBookings();
  const {stays, isLoadingRecentStays, confirmedStays} = useRecentStays();

  if (isLoadingRecentBookings || isLoadingRecentStays) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s Activity</div>
      <div>Chart day durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
