import React from "react";

const Wrap = () => (
  <div className="flex wrap">
    <div className="wrap__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
    <div className="wrap__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
      <h6 className="error">Error Message Will Come Here</h6>
    </div>
    <div className="wrap__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
    <div className="wrap__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
    <div className="wrap__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
  </div>
);

export default Wrap;