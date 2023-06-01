import "./App.css";

const App = () => {
  const handleClick = () => {
    console.log("click by Multiple");
  };
  

  return (
    <main>
      <a onClick={handleClick}>Google</a>
      <div className="container" onClick={handleClick}></div>
      <span onClick={handleClick}>This is a span</span>
    </main>
  );
};
export { App };
