import { Title } from "../title";
import { Recommendation } from "./recommendations";

export function Recommendations() {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <Title title="Recommendations" />
      <Recommendation />
    </section>
  );
}
