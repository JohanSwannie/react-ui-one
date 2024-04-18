import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmation", {
      state: { name: nameRef.current.value, email: emailRef.current.value },
    });
  }

  return (
    <div className="container">
      <h1>Register for Swannies Laundromat Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe
        quis expedita totam atque veritatis tempora doloremque numquam vitae
        architecto?
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="names" ref={nameRef} required />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
