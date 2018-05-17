import React from "react";
import MainLayout from '../main-layout';

const SpaceBetween = () => (
  <div className="flex space-between">
    <div className="space-between__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
    <div className="space-between__flex-item">
      <h5>Textbox</h5>
      <input type="text" />
    </div>
  </div>
);

export default SpaceBetween;