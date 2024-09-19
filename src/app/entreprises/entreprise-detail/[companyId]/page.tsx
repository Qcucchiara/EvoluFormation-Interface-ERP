import React from "react";

const page = ({ params }: { params: { companyId: string } }) => {
  return (
    <div>
      <div>{params.companyId.replace("'", "&apos;")}</div>
      <ul>
        <li>liste des élèves</li>
        <li>formulaire nouvel élève</li>
        <li>détail entreprise/prospect lié/ etc...</li>
        <li>formulaire update entreprise</li>
        <li>je sais pas quoi d&apos;autre encore</li>
      </ul>
    </div>
  );
};

export default page;
