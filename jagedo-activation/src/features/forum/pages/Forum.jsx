import { useState } from "react";

import Tabs from "../../../components/common/Tabs";

import ForumRegistration from "../components/ForumRegistration";
import PastEvents from "../../events/pages/PastEvents";
import Navbar2 from "../../../components/layout/Navigation";
import Jbis from "../../jbis/components/Jbis";
import FAQPage from "../../../pages/FAQs";

export default function Forum() {
    const [activeTab, setActiveTab] = useState("register");

  const tabs = [
    {
      key: "about",
      label: "About",
      content: <Jbis/>,
    },
    {
      key: "register",
      label: "Register",
      content: <ForumRegistration setActiveTab={setActiveTab}/>,
    },
    {
      key: "past",
      label: "Past Events",
      content: <PastEvents />,
    },
    {
      key: "faq",
      label: "FAQS",
      content: <FAQPage/>,
    },
  ];

  return (
    <>
      <Navbar2 />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}
