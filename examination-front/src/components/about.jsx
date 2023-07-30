import PageHeader from "./common/pageHeader";

const About = ({ theme }) => {
  return (
    <>
      <PageHeader title="About:" description="" />
      <div className="text-center justify-content-center">
        <div className="d-flex flex-wrap me-5 mt-2">
          <div
            className="fs-2 text-center mb-2  shadow p-3 bg-body-tertiary rounded border-secondary rounded-2 p-2 ms-5 "
            style={{
              backgroundColor: theme === "light" ? "#e7e7e7" : "#024575",
            }}
          >
            <h2>Confidence and reliability</h2>
            <p className="about m-auto fs-5">
              We want to help you build fast, and secure websites that are easy
              to use!
            </p>
          </div>

          <img
            src="https://www.pngplay.com/wp-content/uploads/1/Men-Pointing-Left-PNG-Background-Stock-Photo.png"
            alt=""
            className="img-fluid mt-5 m-auto"
            style={{
              minWidth: "10rem",
              maxWidth: "70rem",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default About;
