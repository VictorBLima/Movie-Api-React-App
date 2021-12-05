import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolore sit amet, consectetur adipiscing eltes. Aliquen
              feugiat, enim volutpat volutpat ullamcorper, arcus arcus bibendum
              augues, sed temporas tortor massa nec dolor. Duis sapien nisl, luctu
              in semper vitaes, pharetras eget lacus. Nullams odios ero, molis at
              felis nonn, ultrices tristiqui libero. Nula qui pulvinar rizas.
              Crasas dia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutView;
