import { Dashboard } from "@/components/component/dashboard";
import { DashboardV2 } from "@/components/component/dashboard-v2";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <Dashboard/> */}
      <DashboardV2 />
    </main>
  );
}
