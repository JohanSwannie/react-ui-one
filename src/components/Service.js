import { getService } from "../api";
import { useParams } from "react-router-dom";

export default function Session() {
  const { catId, serviceId } = useParams();

  const { name, desc, subservice } = getService({ catId, serviceId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>
      <span>
        <p>{subservice.extra}</p>
      </span>
    </>
  );
}
