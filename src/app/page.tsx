import { CreateNewProspect } from "@/components/Composites/CreateNewProspect";
import { LayoutDashboard } from "@/components/Layouts/LayoutDashboard";
import { FormModule } from "@/components/Modules/Forms/FormModule";
import { FormTrainer } from "@/components/Modules/Forms/FormTrainer";
import { FormDevis } from "@/components/Modules/Forms/Quote/FormDevis";
import { FormQuote } from "@/components/Modules/Forms/Quote/FormQuote";
import { Dashboard } from "@/components/Others/V0/dashboard";
import { DashboardV2 } from "@/components/Others/V0/dashboard-v2";
import DatatableExample from "@/components/Others/V0/DatatableExample";
import GestionProspects from "@/components/Others/V0/GestionProspects";
import { MessagingPage } from "@/components/Others/V0/MessagingPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Dashboard/> */}
      {/* <DashboardV2 /> */}
      {/* <FormDevis /> */}
      {/* <DatatableExample /> */}
      {/* <FormTrainer /> */}
      {/* <FormModule /> */}
      {/* <LayoutDashboard /> */}
      {/* <CreateNewProspect /> */}
      <GestionProspects />
    </>
  );
}
