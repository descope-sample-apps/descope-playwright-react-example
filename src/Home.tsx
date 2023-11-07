import { SignUpOrInFlow, useSession, useUser } from "@descope/react-sdk";
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
          <SignUpOrInFlow />
        )}
      </header>
    </div>
  );
}

export default Home;
