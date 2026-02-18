import React from "react";

function Academics() {
  return (
    <section id="academics" className="section light">
      <h2>Academics</h2>

      <div className="cards">

        {/* Pre-KG Kids */}
        <div className="card">
          <img
            className="card-img"
            src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="PreKG Kids"
          />
          <div className="card-body">
            <h3>Pre-KG</h3>
            <p>Fun-Based Early Learning</p>
          </div>
        </div>

        {/* Primary School Kids (1–3) */}
        <div className="card">
          <img
            className="card-img"
            src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Primary School Kids"
          />
          <div className="card-body">
            <h3>Classes 1-3</h3>
            <p>Strong Foundation Curriculum</p>
          </div>
        </div>

        {/* Single Girl Image for Classes 4–5 */}
        <div className="card">
          <img
            className="card-img"
            src="https://images.pexels.com/photos/8613305/pexels-photo-8613305.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="School Girl"
          />
          <div className="card-body">
            <h3>Classes 4-5</h3>
            <p>Skill Development & Creative Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academics;
