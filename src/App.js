import "./App.css";
import LogoHeader from "./components/LogoHeader";
import LandingFormPage from "./components/LandingFormPage";
import FormProvider from "./store/FormProvider";
import PaginateBar from "./components/PaginateBar";

function App() {
  return (
    <FormProvider>
      <div className="app">
      
      <div className="card">
            <LogoHeader />
          
        </div>
        <div className="container">
              
              <PaginateBar />
              <LandingFormPage />
          </div>
      </div>
    </FormProvider>
  );
}

export default App;
