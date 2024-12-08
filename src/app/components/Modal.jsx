const Modal = ({ children }) => {
  const cardStyle = {
    position: "fixed",
    padding: "100px",
    margin: "auto",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="w-[100vw] max-h-[80vh] h-[100vh] fixed flex justify-center items-center">
      <div className="h-4/5 w-3/4 shadow-md rounded-md p-4">{children}</div>
    </div>
  );
};

export default Modal;
