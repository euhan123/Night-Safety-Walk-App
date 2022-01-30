import React from "react";
import { Button } from "react-bootstrap";
import {Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Cal Me Maybe</h1>
        <p className="text-muted">A night safety walking app for Berkeley students.</p>
        <Link to="/profile">
          <Button variant="primary">Profile</Button>
        </Link>
      </div>
    </div>

  );
}