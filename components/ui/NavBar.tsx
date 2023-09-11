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
    // <div
    //   style={{
    //     display: "flex",
    //     width: "100%",
    //     flexDirection: "row",
    //     alignContent: "center",
    //     justifyContent: "start",
    //     padding: "0px 20px",
    //     backgroundColor: "black",
    //   }}
    // >
    //   <Image
    //     src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    //     alt="Icono del sitio web"
    //     width={70}
    //     height={70}
    //   />

    //   <h2 style={{ color: "white" }}>P</h2>
    //   <h3 style={{ color: "white" }}>okemon</h3>

    //   <Spacer x={96} />
    //   <Spacer x={96} />
    //   <Spacer x={96} />

    //   <p style={{ color: "white" }}>Favoritos</p>
    // </div>
  );
};
