import { useState } from "react";

import Tabs from "../../../components/common/Tabs";

import ForumRegistration from "../components/ForumRegistration";
import PastEvents from "../../events/pages/PastEvents";
import Navbar2 from "../../../components/layout/Navigation";
import UpcomingEvents from "../../events/pages/UpcomingEvents";
import ForumSchedule from "../components/ForumSchedule";

export default function Forum() {
    const [activeTab, setActiveTab] = useState("register");

  const tabs = [
    {
      key: "program schedule",
      label: "Program Schedule",
      content: <ForumSchedule />,
    },
    {
      key: "register",
      label: "Register",
      content: <ForumRegistration setActiveTab={setActiveTab}/>,
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
  ];

  return (
    <>
      <Navbar2 />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}
