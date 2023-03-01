import "./App.css";
import LogoHeader from "./components/LogoHeader";
import LandingFormPage from "./components/LandingFormPage";
import FormProvider from "./store/FormProvider";
import PaginateBar from "./components/PaginateBar";

function App() {
  return (
    <FormProvider>
      <div className="app">
      <div className="register">
          <LogoHeader />
          
        </div>
        <div className="card">
              <PaginateBar />
              <LandingFormPage />
          </div>
      <section>
          
        </section>
      </div>
    </FormProvider>
  );
}

export default App;
