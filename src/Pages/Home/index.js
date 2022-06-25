import { Link } from "react-router-dom";

export function Home() {
  const name = "Felipe";

  return (
    <>
      <h1>Home</h1>
      <Link to={`/profile/${name}`}>
        <button style={{ cursor: "pointer" }}>Perfil</button>
      </Link>
    </>
  );
}
