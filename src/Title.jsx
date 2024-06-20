export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit Reached! Buy <b>Pro</b> for &gt;10
        </span>
      ) : (
        "Counter App"
      )}
    </h1>
  );
}
