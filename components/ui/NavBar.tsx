import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Spacer,
} from "@nextui-org/react";

export const NavBar = () => {
  return (
    <>
      <Navbar
        position="static"
        isBordered
        className="bg-red-200"
      >
        <NavbarBrand>
          <Link
            href="/"
            color="danger"
          >
            <h1 style={{ fontSize: "50px" }}>P</h1>
            <h2>okemón API</h2>
          </Link>
        </NavbarBrand>
        <Spacer x={96} />
        <Spacer x={96} />
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        >
          <NavbarItem>
            <Link
              href="#"
              color="danger"
            >
              Favoritos
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};
