import css from "styled-jsx/css";

const Instrument = () => {
  return (
    <div className="container">
      <p>instrument page</p>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Instrument;

const styles = css`
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`;
