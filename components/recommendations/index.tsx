import { Container } from "../container";
import { Title } from "../title";
import { Recommendation } from "./recommendations";

export function Recommendations() {
  return (
    <Container className="grid-background" id="recommendations">
      <div className="flex flex-col items-center justify-center">
        <Title title="Recommendations" />
        <Recommendation />
      </div>
    </Container>
  );
}
