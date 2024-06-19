import Count from "./Count";
import CountButton from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  return (
    <div className="card">
      <Title />
      <Count />
      <ResetButton />
      <CountButton />
    </div>
  );
}
