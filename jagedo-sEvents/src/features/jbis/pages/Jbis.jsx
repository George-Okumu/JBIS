import { useState } from "react";
import SponsorsPage from "../components/Sponsers";
import FAQPage from "../../../pages/FAQs";
import Tabs from "../../../components/common/Tabs";
import ProgramSchedule from "../components/programschedule";
import RegistrationPage from "../components/RegistrationPage";
import UpcomingEvents from "../../events/pages/UpcomingEvents";
import PastEvents from "../../events/pages/PastEvents";
import Navbar2 from "../../../components/layout/Navigation";
import Jbis from "../components/Jbis";
import SponsorsRegistration from "../components/SponsersRegistration";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      key: "home",
      label: "",
      content: <Jbis setActiveTab={setActiveTab} />,
    },
    {
      key: "program schedule",
      label: "Program Schedule",
      content: <ProgramSchedule />,
    },
    {
      key: "register",
      label: "Register",
      content: <RegistrationPage />,
    },
    {
      key: "sponsor",
      label: "Sponsors",
      content: <SponsorsPage setActiveTab={setActiveTab} />,
    },
    {
      key: "upcoming",
      label: "Upcoming Events",
      content: <UpcomingEvents />,
    },
    {
      key: "past",
      label: "Past Events",
      content: <PastEvents />,
    },
    {
      key: "faqs",
      label: "FAQS",
      content: <FAQPage />,
    },
    {
      key: "sponsor-reg",
      label: "",
      content: <SponsorsRegistration/>,
    },
  ];

  return (
    <>
      <Navbar2 />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
};

export default Home;
