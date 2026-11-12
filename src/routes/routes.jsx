import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Patient pages
import AllPatient from "../pages/Patient/AllPatient";
import AddNewPatient from "../pages/Patient/AddNewPatient";
import ConfirmPatientList from "../pages/Patient/ConfirmPatientList";
import RefundsNew from "../pages/Patient/RefundsNew";

// Encounter pages
import NewClaim from "../pages/Encounter/NewClaim";
import NewPayment from "../pages/Encounter/NewPayment";
import PreBillingClaim from "../pages/Encounter/PreBillingClaim";
import PreBillingEditPage from "../pages/Encounter/PreBillingEditPage";
import PostBillingDetail from "../pages/Encounter/PostBillingDetail";
import PostBillingEditPage from "../pages/Encounter/PostBillingEditPage";
import RemittanceERAEdit from "../pages/Encounter/RemittanceERAEdit";

// Command pages
import Summary from "../pages/Command/Summary";
import AIInsight from "../pages/Command/AIInsight";
import MyTask from "../pages/Command/MyTask";
import PerformanceOverview from "../pages/Command/PerformanceOverview";

// Configuration pages
import ReferringProvider from "../pages/Configuration/ReferringProvider";
import ReferringProviderEdit from "../pages/Configuration/ReferringProviderEdit";
import RenderingProvider from "../pages/Configuration/RenderingProvider";
import RenderingProviderEdit from "../pages/Configuration/RenderingProviderEdit";
import Locations from "../pages/Configuration/Locations";
import LocationsEdit from "../pages/Configuration/LocationsEdit";
import Practice from "../pages/Configuration/Practice";
import PracticeEdit from "../pages/Configuration/PracticeEdit";
import Fee from "../pages/Configuration/Fee";
import FeeConfiguration from "../pages/Configuration/FeeConfiguration";
import InsuranceProvider from "../pages/Configuration/InsuranceProvider";
import InsuranceProviderEdit from "../pages/Configuration/InsuranceProviderEdit";
import Program from "../pages/Configuration/Program";
import ProgramEdit from "../pages/Configuration/ProgramEdit";

// Other pages
import Login from "../pages/Login";
import Reports from "../pages/Reports";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <div style={{ padding: "24px" }}>Welcome to TiaSTAT</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/summary"
        element={
          <ProtectedRoute>
            <Summary />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ai-insights"
        element={
          <ProtectedRoute>
            <AIInsight />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-tasks"
        element={
          <ProtectedRoute>
            <MyTask />
          </ProtectedRoute>
        }
      />
      <Route
        path="/performance-overview"
        element={
          <ProtectedRoute>
            <PerformanceOverview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/referring-provider"
        element={
          <ProtectedRoute>
            <ReferringProvider />
          </ProtectedRoute>
        }
      />
      <Route
        path="/referring-provider/edit"
        element={
          <ProtectedRoute>
            <ReferringProviderEdit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/rendering-provider"
        element={
          <ProtectedRoute>
            <RenderingProvider />
          </ProtectedRoute>
        }
      />
      <Route
        path="/rendering-provider/edit"
        element={
          <ProtectedRoute>
            <RenderingProviderEdit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/locations"
        element={
          <ProtectedRoute>
            <Locations />
          </ProtectedRoute>
        }
      />
      <Route
        path="/locations/edit"
        element={
          <ProtectedRoute>
            <LocationsEdit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice"
        element={
          <ProtectedRoute>
            <Practice />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/edit"
        element={
          <ProtectedRoute>
            <PracticeEdit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/fee"
        element={
          <ProtectedRoute>
            <Fee />
          </ProtectedRoute>
        }
      />
      <Route
        path="/fee/configuration"
        element={
          <ProtectedRoute>
            <FeeConfiguration />
          </ProtectedRoute>
        }
      />
      <Route
        path="/insurance-provider"
        element={
          <ProtectedRoute>
            <InsuranceProvider />
          </ProtectedRoute>
        }
      />
      <Route
        path="/insurance-provider/edit"
        element={
          <ProtectedRoute>
            <InsuranceProviderEdit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/program"
        element={
          <ProtectedRoute>
            <Program />
          </ProtectedRoute>
        }
      />
      <Route
        path="/program/configuration"
        element={
          <ProtectedRoute>
            <ProgramEdit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-patient"
        element={
          <ProtectedRoute>
            <AllPatient />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient-list"
        element={
          <ProtectedRoute>
            <ConfirmPatientList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-new-patient"
        element={
          <ProtectedRoute>
            <AddNewPatient />
          </ProtectedRoute>
        }
      />

      <Route
        path="/refunds"
        element={
          <ProtectedRoute>
            <RefundsNew />
          </ProtectedRoute>
        }
      />

      <Route
        path="/encounters"
        element={
          <ProtectedRoute>
            <PreBillingClaim />
          </ProtectedRoute>
        }
      />
      <Route
        path="/claims/pre-billing"
        element={
          <ProtectedRoute>
            <PreBillingClaim />
          </ProtectedRoute>
        }
      />
      <Route
        path="/claims/post-billing"
        element={
          <ProtectedRoute>
            <PreBillingClaim />
          </ProtectedRoute>
        }
      />
      <Route
        path="/claims/remittance-era"
        element={
          <ProtectedRoute>
            <PreBillingClaim />
          </ProtectedRoute>
        }
      />
      <Route
        path="/claims/patient-statement"
        element={
          <ProtectedRoute>
            <PreBillingClaim />
          </ProtectedRoute>
        }
      />

      <Route
        path="/new-payment"
        element={
          <ProtectedRoute>
            <NewPayment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/encounter-list"
        element={
          <ProtectedRoute>
            <div style={{ padding: "24px" }}>Encounter List Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/era"
        element={
          <ProtectedRoute>
            <div style={{ padding: "24px" }}>ERA Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/collections"
        element={
          <ProtectedRoute>
            <div style={{ padding: "24px" }}>Collections Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/icd-10-search"
        element={
          <ProtectedRoute>
            <div style={{ padding: "24px" }}>ICD 10 Search Page</div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/documents"
        element={
          <ProtectedRoute>
            <div style={{ padding: "24px" }}>Documents Page</div>
          </ProtectedRoute>
        }
      />

      {/* ---------- Edit pages ---------- */}

      <Route
        path="/new-encounter"
        element={
          <ProtectedRoute>
            <NewClaim />
          </ProtectedRoute>
        }
      />
      <Route
        path="/new-claim"
        element={
          <ProtectedRoute>
            <NewClaim />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pre-billing-edit/:id"
        element={
          <ProtectedRoute>
            <PreBillingEditPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/post-billing-edit/:id"
        element={
          <ProtectedRoute>
            <PostBillingEditPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/post-billing-detail/:id"
        element={
          <ProtectedRoute>
            <PostBillingDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/claims/post-billing-edit/:id"
        element={
          <ProtectedRoute>
            <PostBillingEditPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/claims/post-billing-detail/:id"
        element={
          <ProtectedRoute>
            <PostBillingDetail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/statement"
        element={
          <ProtectedRoute>
            <PreBillingClaim />
          </ProtectedRoute>
        }
      />
      <Route
        path="/remittance-era-details/:id"
        element={
          <ProtectedRoute>
            <RemittanceERAEdit />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
