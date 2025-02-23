import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { LiveAgents } from './components/marketplace/LiveAgents';
import { AgentDetails } from './components/agent/AgentDetails';
import { MyAssets } from './components/profile/MyAssets';
import { MyCreatedAssets } from './components/profile/MyCreatedAssets';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsOfService } from './components/pages/TermsOfService';

// Placeholder components for dashboard routes
const CreateAgent = () => <div>Create New Agent</div>;
const InitialAgentOffering = () => <div>Initial Agent Offering</div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Footer />
            </>
          }
        />

        {/* Privacy Policy */}
        <Route
          path="/privacy"
          element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        {/* Terms of Service */}
        <Route
          path="/terms"
          element={
            <>
              <Navbar />
              <TermsOfService />
              <Footer />
            </>
          }
        />

        {/* Dashboard routes */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/app/marketplace/live" replace />} />
          <Route path="create" element={<CreateAgent />} />
          <Route path="marketplace">
            <Route path="live" element={<LiveAgents />} />
            <Route path="live/:id" element={<AgentDetails />} />
            <Route path="iao" element={<InitialAgentOffering />} />
          </Route>
          <Route path="profile">
            <Route path="assets" element={<MyAssets />} />
            <Route path="agents" element={<MyCreatedAssets />} />
          </Route>
        </Route>

        {/* Demo route - mirrors the app route */}
        <Route path="/demo" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/demo/marketplace/live" replace />} />
          <Route path="create" element={<CreateAgent />} />
          <Route path="marketplace">
            <Route path="live" element={<LiveAgents />} />
            <Route path="live/:id" element={<AgentDetails />} />
            <Route path="iao" element={<InitialAgentOffering />} />
          </Route>
          <Route path="profile">
            <Route path="assets" element={<MyAssets />} />
            <Route path="agents" element={<MyCreatedAssets />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;