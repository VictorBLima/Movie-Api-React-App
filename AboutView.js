import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolores sit amet, consectetur adipiscing eltes. Aliquen
              feugiat, enim volutpat volutpat ullamcorper, arcus arcus bibendum
              augues, sed tempora tortor massa nec dolor. Duis sapien nisl, luctus
              in semper vitaes, pharetras eget lacus. Nullams odios eros, molis at
              felis nonn, ultrice tristiquis liberos. Nula qui pulvinar rizas.
              Crasas dias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutView;
