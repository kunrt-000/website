import { useRouter } from "next/router";
import { ReactElement } from "react";
import AltusHeader from "../altus/Header";
import AltusFooter from "../altus/Footer";
import MainFooter from "../Footer";
import MainHeader from "../Header";

const MainLayout = ({ children }: { children: ReactElement }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/altus" ? <AltusHeader /> : <MainHeader />}
      <div className="children">{children}</div>
      {router.pathname === "/altus" ? <AltusFooter /> : <MainFooter />}
    </>
  );
};

export default MainLayout;
