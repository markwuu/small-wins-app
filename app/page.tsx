import LoggedIn from "./feature/LoggedIn";
import LoggedOut from "./feature/LoggedOut";

export default function Home() {
  const loggedIn = true;

  return loggedIn ? <LoggedIn /> : <LoggedOut />;
}
