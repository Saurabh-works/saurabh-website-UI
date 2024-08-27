import './App.css';
// import Routing from './Routing/Routing';
import Nav_Routing from './Routings/Nav_Routing';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import axios from 'axios';



function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
      {/* <Routing></Routing> */}
      <ThemeProvider theme={theme}>
        <Nav_Routing></Nav_Routing>
      </ThemeProvider>
    </>
  );
}

export default App;
