import { useParams } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);

  return (
    <>
      <h2>{category.name} Services</h2>

      <ul className="service-list">
        {category?.services.map((service) => (
          <li className="service" key={service.id}>
            <p>{service.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
