import React from "react";
import piggybank from "./piggybank.png";
import "./page.css";

function Home() {
  return (
    <>
      <br />
      <hr className="solid"></hr>
      <br />
      <div className="home-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={piggybank} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Bad Bank</h5>
              <p className="card-text">Welcome to Bad Bank...</p>
            </div>
            
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
export default Home;
