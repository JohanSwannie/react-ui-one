import mainImg from "../assets/img-main.jpg";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={mainImg}
        alt="Swannies Laundromat Services"
      />

      <h1>{title}</h1>
      <p>
        For that perfectly soft scent of freshness, Swannies Laundromat Services
        are the right choice for your cloths, where Spotless Clothes Are at Your
        Doorstep. Let our smooth touch take the stress out of your day, giving
        you time back for the important things.
      </p>
    </div>
  );
}
