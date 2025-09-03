import { Outlet } from "react-router";
import SocialNetworkLayout from "~/components/social-network/SocialNetworkLayout";

export default function Layout() {
  return (
    <SocialNetworkLayout>
      <Outlet />
    </SocialNetworkLayout>
  );
}