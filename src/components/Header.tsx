import { Navbar, Container, Nav } from "react-bootstrap";

export function Header(): JSX.Element {
  const headerStyle = {
    backgroundColor: "lightblue",
  };
  const buttonStyle = {
    borderRadius: "10px",
    backgroundColor: "orange",
    marginLeft: "15px",
  };
  return (
    <Navbar style={headerStyle}>
      <Container>
        <Nav>
          <Nav.Link href="/" style={buttonStyle}>
            {/* <img src="/icons/user-118.svg" alt="home" /> */}
            Home
          </Nav.Link>

          <Nav.Link href="/Users" style={buttonStyle}>
            <img src="" alt="" />
            Users
          </Nav.Link>

          <Nav.Link href="/AddUser" style={buttonStyle}>
            Add User
          </Nav.Link>

          <Nav.Link href="/404" style={buttonStyle}>
            Not Found
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
