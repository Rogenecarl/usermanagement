import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <div>
        for guest layout only
      </div>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
