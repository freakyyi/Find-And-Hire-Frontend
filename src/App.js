import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Header from "./pages/inc/Header";
import Footer from "./pages/inc/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JobNearMe from "./pages/JobNearMe";
import Category from "./pages/Category";
import Resume from "./pages/Resume";
import JobPostForm from "./pages/JobPostForm";
import JobPlanes from "./pages/JobPlanes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";
import RegisterCompany from "./pages/RegisterCompany";
import ScrollToTop from "./pages/ScrollToTop";
import ViewProfile from "./pages/ViewProfile";
import CVPreview from './pages/CVPreview';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/category" component={Category} />
          <Route path="/jobs-near-me" component={JobNearMe} />
          <Route path="/cv-resume" component={Resume} />
          <Route path="/post-job-form" component={JobPostForm} />
          <Route path="/job-plans" component={JobPlanes} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/company_register" component={RegisterCompany} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/view-profile" component={ViewProfile} />
          <Route path="/cv_preview" component={CVPreview} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
