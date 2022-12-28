import css from "styled-jsx/css";

const HowToUse = () => {
  return (
    <div className="container">
      <p>how to use</p>
      <style jsx>{styles}</style>
    </div>
  );
};

export default HowToUse;

const styles = css`
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`;
