import { FC } from "react";
import { ProfileForm } from "./components/profile-form";
import { Separator } from "@/components/ui/separator";

interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
};

export default Settings;
