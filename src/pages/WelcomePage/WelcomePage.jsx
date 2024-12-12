import "./WelcomePage.module.css";

export const WelcomePage = () => {
  return (
    <div className="main-page">
      <main className="main-paige-content">
        <section className="main-paige-info">
          <h1>Water consumption tracker</h1>
          <p>Record daily water intake and track</p>
          <div className="main-paige-benefits">
            <h2>Tracker Benefits</h2>
            <ul>
              <li>Habit drive</li>
              <li>View statistics</li>
              <li>Personal rate setting</li>
            </ul>
          </div>
          <button className="try-main-button">Try tracker</button>
        </section>
        <section className="why-drink-water">
          <h2>Why drink water</h2>
          <ul>
            <li>Supply of nutrients to all organs</li>
            <li>Providing oxygen to the lungs</li>
            <li>Maintaining the work of the heart</li>
            <li>Release of processed substances</li>
            <li>Ensuring the stability of the internal environment</li>
            <li>Maintaining within the normal temperature</li>
            <li>Maintaining an immune system capable of resisting disease</li>
          </ul>
        </section>
        <div className="main-paige-illustration">
          <img src="" alt="" />
        </div>
      </main>
    </div>
  );
};
