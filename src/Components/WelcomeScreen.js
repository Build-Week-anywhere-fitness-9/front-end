import React from "react";
import { Link } from "react-router-dom";

function WelcomeScreen() {
  return (
    <div className="WelcomeScreen" data-testid="WelcomeScreen">
      <h1>Fitness Made Easy</h1>

      <div className="par1">
        <div className="div">
          <h3>Fitness Found Anywhere Anyplace</h3>
          <p>
            These days, fitness classes can be held anywhere- a park, an
            unfinished basement or a garage- not just at a traditional gym.
            Certified fitness instructors need an easy way to take the
            awkwardness out of attendance taking and client payment processing.
          </p>
        </div>
        <img
          src="https://media.istockphoto.com/photos/boot-camp-picture-id907686608?b=1&k=20&m=907686608&s=170667a&w=0&h=67Jtmzz7JVDycxFc3ibzTYzwsOLvTefQwwDaquVV-ts="
          alt="img"
        />
      </div>
      <div className="par2">
        <img
          src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="img"
        />
        <div className="div">
          <h3>Easy Accessibility</h3>
          <p>
            While you could use several mobile apps to accomplish this,
            **AnywhereFitness** is the all-in-one solution to meet your
            “on-location” fitness class needs. AnywhereFitness makes it painless
            for Instructors and Clients alike to hold and attend Fitness classes
            wherever they might be held.
          </p>
        </div>
      </div>
      <div className="par3">
        <div className="div">
          <h3>Find Great Instructors Anywhere</h3>
          <p>
            Instructors can take attendance, request and process payments,
            create virtual “punch passes” for each type of class offered, alert
            clients of cancellations or location changes and so much more.
            Clients can easily find out information on classes - location, class
            size, start time and duration, as well as reschedule or cancel an
            upcoming appointment or reservation right from the mobile app.
          </p>
        </div>
        <img
          src="https://media.istockphoto.com/photos/sporty-people-exercising-in-fitness-gym-picture-id1299585149?b=1&k=20&m=1299585149&s=170667a&w=0&h=CnEd96y6-pe7NnfmZgmT2KfxRSNOtG9dI0mOezRKsPg="
          alt="img"
        />
      </div>
      <h2>Join And Become A Part Of A World Wide Family</h2>
      <div className="ending">
        <Link to="/signup">Start Your Trial</Link>
      </div>
    </div>
  );
}

export default WelcomeScreen;
