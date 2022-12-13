import { useAuth } from "@pangeacyber/react-auth";

const Home = () => {
  const { authenticated} = useAuth();

  return (
    <div className="home">
      <h1>Home</h1>
      <div>
        { authenticated ? 
        (<span className="success">Authenticated</span>) : 
        (<span className="warn">Unauthenticated</span>)
        }
      </div>
    </div>
  );
}

export default Home;