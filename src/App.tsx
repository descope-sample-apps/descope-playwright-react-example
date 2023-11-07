import { AuthProvider } from "@descope/react-sdk";
import Home from "./Home";

const App = () => (
  <AuthProvider projectId={process.env.REACT_APP_DESCOPE_PROJECT_ID ?? ""}>
    <Home />
  </AuthProvider>
);

export default App;
