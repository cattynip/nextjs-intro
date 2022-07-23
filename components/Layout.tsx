import NavBar from "./NavBar";

function Layout({ children }: React.PropsWithChildren) {
  return <>
    <NavBar />
    <div>{children}</div>
  </>;
}

export default Layout;
