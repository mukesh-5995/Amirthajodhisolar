import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section class="counter section-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-3">
            <div class="counters-item">
              <span>$50B+</span>
              <p>Bitcoin Served</p>
            </div>
          </div>
          <div class="col-md-3 col-3">
            <div class="counters-item">
              <span>10M+</span>
              <p>Server Build</p>
            </div>
          </div>
          <div class="col-md-3 col-3">
            <div class="counters-item">
              <span>68</span>
              <p>Countries Supported</p>
            </div>
          </div>
          <div class="col-md-3 col-3">
            <div class="counters-item kill-border">
              <span>10B</span>
              <p>Active Treades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
