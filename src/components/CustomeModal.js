import React from "react";

export default function CustomeModal(props) {
  const { BoxHeader, BoxFooter } = props;
  const boxStyle = {
    margin: "2rem auto 10px",
    boxShadow: "1px 5px 8px 0px #ddd",
    borderRadius: "5px",
    background: "#fff",
    width: "68%",
  };

  const BoxHeaderStyle = {
    paddingLeft: "10px",
    paddingTop: "10px",
    paddingBottom: "5px",
    background: "#1f4a97",
    borderRadius: "5px 5px 0px 0px",
    color: "#fff",
    borderBottom: "3px solid #6fd1e4",
  };
  const BoxContentStyle = {
    padding: "20px",
  };

  return (
    <>
      <div style={boxStyle}>
        <div className="boxHeader" style={BoxHeaderStyle}>
          <h5>{BoxHeader}</h5>
        </div>
        <div className="box-content" style={BoxContentStyle}>
          {props.children}
        </div>
        <div className="box-footer">{BoxFooter}</div>
      </div>
    </>
  );
}
