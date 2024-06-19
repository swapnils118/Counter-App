import Count from "./Count";
import CountButton from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

function App() {
  return (
    <main>
      <div>
        <Title />
        <Count />
        <ResetButton />
        <CountButton />
      </div>
    </main>
  );
}

export default App;
