import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Complaints from './pages/Complaints';
import Gallery from './pages/Gallery';
import AboutGramPanchayat from './pages/AboutGramPanchayat';
import HistoricalSignificance from './pages/HistoricalSignificance';
import TalukaBackground from './pages/TalukaBackground';
import MythologicalSignificance from './pages/MythologicalSignificance';
import Pesa from './pages/Pesa';
import PradhanMantriAwasYojana from './pages/PradhanMantriAwasYojana';
import ShabariAwasYojana from './pages/ShabariAwasYojana';
import DepartmentOfCulturalAffairs from './pages/DepartmentOfCulturalAffairs';
import SkillDevelopmentandEntrepreneurshipDepartment from './pages/SkillDevelopmentandEntrepreneurshipDepartment';
import TribalDevelopmentDepartment from './pages/TribalDevelopmentDepartment';
import WomenandChildDevelopmentDepartment from './pages/WomenandChildDevelopmentDepartment';
import EmploymentGuaranteeScheme from './pages/EmploymentGuaranteeScheme';
import ForCitizens from './pages/ForCitizens';
import OtherGovernmentScheme from './pages/OtherGovernmentScheme';
import OtherDetails from './pages/OtherDetails';
import { SearchProvider } from './context/SearchContext';
import { AppProvider } from './context/AppContext';
import React from "react";

function App() {


  return (
    <AppProvider>
      <Router>
        <div className="App">
          <SearchProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* About US */}
              <Route path="/about-us/about-gram-panchayat" element={<AboutGramPanchayat />} />
              <Route path="/about-us/historical-significance" element={<HistoricalSignificance />} />
              <Route path="/about-us/taluka-background" element={<TalukaBackground />} />
              <Route path="/about-us/mythological-significance" element={<MythologicalSignificance />} />
              <Route path="/about-us/other" element={<OtherDetails />} />
              {/* Government Scheme Information */}
              <Route path="/government-scheme-information/pesa" element={<Pesa />} />
              <Route path="/government-scheme-information/pradhan-mantri-awas-yojana" element={<PradhanMantriAwasYojana />} />
              <Route path="/government-scheme-information/shabari-awas-yojana" element={<ShabariAwasYojana />} />
              <Route path="/government-scheme-information/department-of-cultural-affairs" element={<DepartmentOfCulturalAffairs />} />
              <Route path="/government-scheme-information/skill-development-entrepreneurship-department" element={<SkillDevelopmentandEntrepreneurshipDepartment />} />
              <Route path="/government-scheme-information/tribal-development-department" element={<TribalDevelopmentDepartment />} />
              <Route path="/government-scheme-information/women-and-child-development-department" element={<WomenandChildDevelopmentDepartment />} />
              <Route path="/government-scheme-information/employment-guarantee-scheme-mgnarega" element={<EmploymentGuaranteeScheme />} />
              <Route path="/government-scheme-information/other" element={<OtherGovernmentScheme />} />

              <Route path="/for-citizens" element={<ForCitizens />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </SearchProvider>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
