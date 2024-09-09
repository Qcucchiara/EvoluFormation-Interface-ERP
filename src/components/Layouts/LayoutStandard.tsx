"use client";
import React, { useState } from "react";
import { SideNav } from "../Modules/SideNav";
import { CustomShortcutsHeader } from "../Modules/CustomShortcutsHeader";

const LayoutStandard = ({
  children,
}: // notifs,
// aside,
{
  children: React.ReactNode;
  // notifs?: React.ReactNode;
  // aside?: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <SideNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <CustomShortcutsHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* TODO: problème d'hydration lié a des <buttons> dans le resizable panel. */}
        {children}
      </div>
    </div>
  );
};

export default LayoutStandard;

// const LayoutStandard = ({
//   children,
//   notifs,
//   aside,
// }: {
//   children: React.ReactNode;
//   notifs?: React.ReactNode;
//   aside?: React.ReactNode;
// }) => {
//   return (
//     <div>
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {notifs && (
//           <div className="bg-card p-4 m-4 rounded-lg shadow">
//             <h2 className="text-lg font-semibold mb-2">
//               Dernières notifications (non lues)
//             </h2>
//             {notifs ? (
//               notifs
//             ) : (
//               <p className="text-muted-foreground">
//                 Aucune nouvelle notification
//               </p>
//             )}
//           </div>
//         )}
//         {/* TODO: problème d'hydration lié a des <buttons> dans le resizable panel. */}
//         {aside ? (
//           <ResizablePanelGroup
//             direction="horizontal"
//             className="flex-1 h-[calc(100vh-200px)]"
//           >
//             <ResizablePanel defaultSize={75} minSize={45}>
//               {children}
//             </ResizablePanel>
//             <ResizableHandle withHandle className="w-0.5" />
//             <ResizablePanel defaultSize={25} minSize={30}>
//               {aside}
//             </ResizablePanel>
//           </ResizablePanelGroup>
//         ) : (
//           children
//         )}
//       </div>
//     </div>
//   );
// };

// export default LayoutStandard;
