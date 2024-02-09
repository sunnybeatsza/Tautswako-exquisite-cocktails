import React from "react";

export const AboutUs = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center moreMargin" id="About-me">
        <img src="" alt="" className="profile-photo" />
        <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-3">About me</p>
          <p className="lead mb-3">Mohube Tumisho Makgeru</p>
          <p className="">
            I am a young, vibrant, and creative individual looking to break into
            the tech industry as a software developer. I'm currently looking to
            venture into full stack or mobile development but eventually, I
            would like to venture into game development and virtual reality. I
            love gaming, music, and all things tech. I hope to be a great asset
            to whichever organization I join.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
