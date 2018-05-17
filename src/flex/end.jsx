import React from "react";

const End = () => (
  <div className="flex end">
    <div className="end__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
    <div className="end__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
      <h6 className="error">Error Message Will Come Here</h6>
    </div>
    <div className="end__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
  </div>
);

export default End;