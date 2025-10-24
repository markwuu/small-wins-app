import Modal from "../components/Modal";

export default function LoggedIn() {
  return (
    <div className="border">
      <h1>97 points</h1>
      <button>Add goal</button>
      <ul className="border">
        <li>Eye lube</li>
        <li>Match Teeth</li>
        <li>Walk 1 min</li>
        <li>1 line of code</li>
        <li>apply 1 job</li>
        <li>journal</li>
        <li>dishes</li>
        <li>gratitude</li>
        <li>put gym shoes on</li>
      </ul>
      <Modal />
    </div>
  );
}
