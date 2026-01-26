import "./TextBlock.css";

function TextBlock({ children }) {
  return (
    <p className="text-block">
      {children}
    </p>
  );
}

export default TextBlock;