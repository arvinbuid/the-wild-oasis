import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input/";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <Row>
        <GlobalStyles />
        <StyledApp>
          <Row type='horizontal'>
            <Heading as='h1'>The Wild Oasis</Heading>

            <div>
              <Heading as='h2'>Check in and out</Heading>
              <Button onClick={() => alert("Check in")}>Check In</Button>
              <Button variation='secondary' size='medium' onClick={() => alert("Check out")}>
                Check Out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as='h3'>Form</Heading>

            <div>
              <Input type='number' placeholder='Number of guests' />
              <Input type='number' placeholder='Number of guests' />
            </div>
          </Row>
        </StyledApp>
      </Row>
    </>
  );
}

// defaultProps
export default App;
