import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('./Componenets/Home'));
const UserStatus = lazy(() => import('./Componenets/UserStatus'));
const UserApply = lazy(() => import('./Componenets/UserApply'));
const Profile = lazy(() => import('./Componenets/Profile'));
const AdminDetails = lazy(() => import('./Admin/AdminDetails'));
const AdminAccept = lazy(() => import('./Admin/AdminAccept'));
const NavBar = lazy(() => import('./NavBar'));
const Login = lazy(() => import('./Componenets/Login'));
const Cont = lazy(() => import('./Componenets/Cont'));
const SignUp = lazy(() => import('./Componenets/SignUp'));
const Profile1 = lazy(() => import('./Componenets/Profile1'));
const AdminHome = lazy(() => import('./Admin/AdminHome'));
const LoanStatus = lazy(() => import('./Admin/LoanStatus'));
const SchemeDetails = lazy(() => import('./Admin/SchemeDetails'));
const AdminProfile = lazy(() => import('./Admin/AdminProfile'));
const Contact = lazy(() => import('./Componenets/Contact'));
const AdminCustomer = lazy(() => import('./Admin/AdminCustomer'));
const AboutUs = lazy(() => import('./Componenets/Aboutus'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nav" element={<NavBar />} />
            <Route path="/cot" element={<Cont />} />
            <Route path="/cont" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/status" element={<UserStatus />} />
            <Route path="/loan" element={<UserApply />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pro" element={<Profile1 />} />
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/details" element={<AdminDetails />} />
            <Route path="/accept" element={<AdminAccept />} />
            <Route path="/loanStatus" element={<LoanStatus />} />
            <Route path="/schemes" element={<SchemeDetails />} />
            <Route path="/adminProfile" element={<AdminProfile />} />
            <Route path="/customers" element={<AdminCustomer />} />
            <Route path="/aboutus"element={<AboutUs/>}/>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
