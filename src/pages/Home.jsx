import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleLogut = async () => {
    signOut(auth);
    navigate("/login");
  };

  if (loading) return <p>User info loading...</p>;
  return (
    <div>
      <h2>{user.email}</h2>
      <button onClick={handleLogut}>Logout</button>
    </div>
  );
};

export default Home;
