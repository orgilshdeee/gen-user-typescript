import { Navbar, Container } from "react-bootstrap";

export function Footer() {
  return (
    <Navbar fixed="bottom" style={{ backgroundColor: "lightblue" }}>
      <Container>
        <div>Hello I'm Footer</div>
      </Container>
    </Navbar>
  );
}
