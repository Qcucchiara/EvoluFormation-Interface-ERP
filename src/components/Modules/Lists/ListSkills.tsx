import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { SkillElement } from "./SkillElement";
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Python",
  "Git",
  "SQL",
  "Docker",
  "MongoDB",
  "Express.js",
  "TypeScript",
  "REST API",
  "GraphQL",
  "Webpack",
  "Agile Methodology",
  "Redux",
  "Jest",
  "Sass",
  "Java",
  "C++",
  "PHP",
  "AWS",
  "Kubernetes",
  "Angular",
];

export const ListSkills = () => {
  return (
    <Table>
      <TableCaption>sélectionner les compétences lié</TableCaption>
      <TableHeader>
        {/* <TableHeader className=" fixed"> */}
        <TableRow>
          <TableHead className="w-[100px]">check</TableHead>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="max-h-[400px] overflow-y-scroll">
        {skills.map((skill, index) => {
          return <SkillElement skill={skill} key={index} />;
        })}
      </TableBody>
    </Table>
  );
};
