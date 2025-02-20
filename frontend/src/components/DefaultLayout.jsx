import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <div>
        for guest layout only
      </div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
