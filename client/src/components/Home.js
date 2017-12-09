import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Please Sign In or Register</h1>
      <a href="/auth/google/"><button className="btn green">Sign Up or Login<i className="material-icons left">verified_user</i></button></a>
    </div>
  );
};

export default Home;