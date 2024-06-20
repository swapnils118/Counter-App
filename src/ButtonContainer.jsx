export default function ButtonContainer({ children }) {
  return (
    <div className="button-container">
      {children}
      {/* <button
        onClick={() => {
          count >= 1 ? setCount((prev) => prev - 1) : count;
        }}
        className="count-btn"
      >
        <MinusIcon className="count-btn-icon" />
      </button> */}
    </div>
  );
}
