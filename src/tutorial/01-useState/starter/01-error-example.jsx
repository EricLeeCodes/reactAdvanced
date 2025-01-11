const ErrorExample = () => {
  const count = 0;
  const increaseNumber = () => {
    count = count + 1;
  };

  const decreaseNumber = () => {
    count = count - 1;
  };
  return (
    <div className="container">
      <div>{count}</div>
      <button onClick={increaseNumber}>increase</button>
      <button>decrease</button>
    </div>
  );
};

export default ErrorExample;
