import { Card, Container } from "reactstrap";
import Header from "./components/Header";
import Content from "./components/Content";
import { useContext } from "react";
import { GlobalContext } from "./context";
import { Toaster } from "react-hot-toast";
function App() {
  const { isDarkMode } = useContext(GlobalContext);
  const themeColor = isDarkMode ? "dark" : "light";
  return (
    <Container>
      <Card color={themeColor} style={{ minHeight: "35vw" }}>
        <Header isDarkMode={isDarkMode} />
        <Content />
      </Card>
      <Toaster />
    </Container>
  );
}

export default App;
