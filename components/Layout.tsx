import NavBar from "./NavBar";

function Layout({ children }: React.PropsWithChildren) {
  return <>
    <NavBar />
    {children}
  </>;
}

export default Layout;
