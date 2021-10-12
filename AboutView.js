import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elte. Aliquen
              feugiat, enim volutpat volutpat ullamcorper, arcu arcu bibendum
              augue, sed tempora tortor massa nec dolor. Duis sapien nisl, luctus
              in semper vitae, pharetra eget lacus. Nullams odio eros, molis at
              felis nonn, ultrice tristiquis liberos. Nula quis pulvinar rizas.
              Crasa dia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutView;
