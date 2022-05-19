import { ThemeProvider } from "@mui/material";
import "./App.css";
import SnackbarController from "./context/SnackbarController";
import { SubscriptionForm } from "./Pages";
import theme from "./ThemeOverride";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <ThemeProvider theme={theme}>
          <SnackbarController>
            <SubscriptionForm />
          </SnackbarController>
        </ThemeProvider>
      </main>
    </div>
  );
}

export default App;
