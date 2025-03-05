import { useState } from "react";
import { Results } from "./results";
import { ReferralGuide } from "./referral-guide";
import { SwitchButton } from "../../base-component/ui/switch-button";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("referral");

  const tabs = [
    { id: "referral", label: "Referral Guide", component: <ReferralGuide /> },
    { id: "results", label: "Results", component: <Results /> },
  ];

  return (
    <div className="pt-[90px] mb-10">
      <div className="flex items-center gap-x-4 w-fit">
        {tabs?.map((tab) => (
          <SwitchButton
            key={tab.id}
            text={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      <div className="mt-4">
        {tabs?.find((tab) => tab?.id === activeTab)?.component}
      </div>
    </div>
  );
};
