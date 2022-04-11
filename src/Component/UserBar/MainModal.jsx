import { useState } from "react";

import General from "../UserBar/General/Index";
import SocialMenu from "./SocialMenu/SocialMenu.";
import DesignMenu from "./DesignMenu/DesignMenu";
import TemplateMenu from "./TemplateMenu/TemplateMenu";
import "./MainElement.css";
import Widgets from "../UserBar/widgets/index";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { RiPencilFill } from "react-icons/ri";
import { BiShareAlt } from "react-icons/bi";
import { CgTemplate } from "react-icons/cg";
import { RiPaintFill } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const MainModal = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <main className="shadow-2xl bg-white " style={{ height: "81%" }}>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="shadow-md">
          <TabList className=" flex flex-row items-center justify-center gap-2 bg-gray-200 shadow-md   py-3 px-5">
            <Tab>
              <div className="flex flex-col items-center w-20 h-14 cursor-pointer  px-4 pt-2">
                <RiPencilFill fontSize="21" />
                <p className="text-sm font-semibold">General</p>
              </div>
            </Tab>
            <Tab>
              <div className="flex flex-col items-center w-20 h-14 cursor-pointer  px-4 pt-2">
                {" "}
                <BiShareAlt fontSize="21" />
                <p className="text-sm font-semibold">Social</p>
              </div>
            </Tab>
            <Tab>
              <div className="flex flex-col items-center w-20 h-14 cursor-pointer  px-4 pt-2">
                {" "}
                <CgTemplate fontSize="22" />
                <p className="text-sm font-semibold ">Template</p>
              </div>
            </Tab>
            <Tab>
              <div className="flex flex-col items-center w-20 h-14 cursor-pointer  px-4 pt-2">
                {" "}
                <RiPaintFill fontSize="23" />
                <p className="text-sm font-semibold">Design</p>
              </div>
            </Tab>
            <Tab>
              <div className="flex flex-col items-center w-20 h-14 cursor-pointer  px-4 pt-2">
                {" "}
                <AiOutlineAppstoreAdd fontSize="21" />
                <p className="text-sm font-semibold -ml-1">Widgets</p>
              </div>
            </Tab>
          </TabList>
        </div>
        {/* FIRST TAB PANEL */}
        <TabPanel>
          <General />
        </TabPanel>

        {/* SECOND TAB PANEL */}
        <TabPanel>
          <SocialMenu />
        </TabPanel>

        {/* THIRD TAB PANEL */}
        <TabPanel>
          <TemplateMenu />
        </TabPanel>
        {/* FOURTH TAB PANEL */}
        <TabPanel>
          <DesignMenu />
        </TabPanel>
        {/* FIFTH TAB PANEL */}
        <TabPanel>
          <Widgets />
        </TabPanel>
      </Tabs>
    </main>
  );
};
export default MainModal;
