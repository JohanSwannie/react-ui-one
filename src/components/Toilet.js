import toilet from "../assets/toilet.jpg";

export default function Toilet() {
  return (
    <div className="container">
      <h4 style={{ marginBottom: "2rem", fontFamily: "'Lora', serif" }}>
        Take your time - relax - and let it all out &#128515;
      </h4>
      <img
        className="toilet"
        src={toilet}
        alt="Swannies toilet"
        width="550"
        title="Swannie Laundromat | Toilet"
      />
    </div>
  );
}
