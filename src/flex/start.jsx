import React from "react";

const Start = () => (
  <div className="flex start">
    <div className="start__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
    <div className="start__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
      <h6 className="error">Error Message Will Come Here</h6>
    </div>
    <div className="start__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
  </div>
);

export default Start;