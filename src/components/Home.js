import featImg from "../assets/img-main.jpg";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Red30 Tech conference attendees on a laptop"
      />

      <h1>{title}</h1>
      <p>
        For that perfectly soft scent of freshness, ee are the right choice for
        your cloths, where Spotless Clothes Are at Your Doorstep. Let our smooth
        touch take the stress out of your day, giving you time back for the
        important things.
      </p>
    </div>
  );
}
