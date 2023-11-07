import { Descope, useSession, useUser } from "@descope/react-sdk";
import "./Home.css";

function Home() {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { isUserLoading, user } = useUser();

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to my app!</p>
        {isSessionLoading || isUserLoading ? (
          <>Loading..</>
        ) : isAuthenticated ? (
          <p>Hello, {user.userId}</p>
        ) : (
          <Descope
          flowId={
            process.env.REACT_APP_DESCOPE_SIGN_IN_FLOW_ID || "sign-up-or-in"
          }
          onSuccess={(e) => {
            console.log("Logged in!");
          }}
          onError={(e) => console.log("Error!")}
        />
        )}
      </header>
    </div>
  );
}

export default Home;
