import { Navbar, Container, Nav } from "react-bootstrap"

const TopBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">DimsFilms</Navbar.Brand>
          <Nav>
            <Nav.Link href="#Dracor">Dracor</Nav.Link>
            <Nav.Link href="#Anime">Anime</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopBar
