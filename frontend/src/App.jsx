import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  )
}

export default App