import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text="Home" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rutrum mi felis, non lobortis enim congue in. Vestibulum
              scelerisque faucibuss quam, eu lobortis antes facilisis facilesis.
              Phasellus porttitor tortor ets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
