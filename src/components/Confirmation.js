import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>
      <p>You're now registered for Swannies Laundromat Services</p>
      <p>
        We have send a confirmation email to <strong>{state.email}</strong>
      </p>
    </div>
  );
}
