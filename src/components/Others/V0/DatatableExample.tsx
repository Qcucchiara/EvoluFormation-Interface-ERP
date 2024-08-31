import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
  Clock,
  Filter,
  MoreHorizontal,
} from "lucide-react";

const tasks = [
  {
    id: "TASK-8782",
    type: "Documentation",
    title:
      "You can't compress the program without quantifying the open-source SSD...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7878",
    type: "Documentation",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-7839",
    type: "Bug",
    title: "We need to bypass the neural TCP card!",
    status: "Todo",
    priority: "High",
  },
  {
    id: "TASK-5562",
    type: "Feature",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back ...",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-8686",
    type: "Feature",
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "Canceled",
    priority: "Medium",
  },
  {
    id: "TASK-1280",
    type: "Bug",
    title:
      "Use the digital TLS panel, then you can transmit the haptic system!",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-7262",
    type: "Feature",
    title:
      "The UTF8 application is down, parse the neural bandwidth so we can back...",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-1138",
    type: "Feature",
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p S...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7184",
    type: "Feature",
    title: "We need to program the back-end THX pixel!",
    status: "Todo",
    priority: "Low",
  },
  {
    id: "TASK-5160",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
  },
];

const statusIcons = {
  Todo: <Clock className="h-4 w-4 text-muted-foreground" />,
  "In Progress": <Clock className="h-4 w-4 text-blue-500" />,
  Done: <Clock className="h-4 w-4 text-green-500" />,
  Canceled: <Clock className="h-4 w-4 text-red-500" />,
  Backlog: <Clock className="h-4 w-4 text-yellow-500" />,
};

const priorityIcons = {
  Low: <ChevronDown className="h-4 w-4 text-muted-foreground" />,
  Medium: <ChevronRight className="h-4 w-4 text-muted-foreground" />,
  High: <ChevronUp className="h-4 w-4 text-muted-foreground" />,
};

const DatatableExample = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Example de liste:</h1>
          {/* <p className="text-muted-foreground">
            Here's a list of your tasks for this month!
          </p> */}
        </div>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <Input placeholder="Recherche" className="max-w-sm" />
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[120px]">
                Status <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Todo</DropdownMenuItem>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Canceled</DropdownMenuItem>
              <DropdownMenuItem>Backlog</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[120px]">
                Priority <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Low</DropdownMenuItem>
              <DropdownMenuItem>Medium</DropdownMenuItem>
              <DropdownMenuItem>High</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                View <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Card View</DropdownMenuItem>
              <DropdownMenuItem>Table View</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead> */}
              <TableHead className="w-[100px]">Référence</TableHead>
              {/* <TableHead>Entreprise</TableHead> */}
              <TableHead>Contact</TableHead>
              <TableHead>Entreprise</TableHead>
              <TableHead className="w-[150px]">Status</TableHead>
              {/* <TableHead className="w-[150px]">Priority</TableHead> */}
              <TableHead>date</TableHead>
              <TableHead className="w-[40px]">actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                {/* <TableCell>
                  <Checkbox />
                </TableCell> */}
                <TableCell className="font-medium">{task.id}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {/* <span className="bg-muted text-muted-foreground text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      {task.type}
                    </span> */}
                    {/* {task.title} */}
                    nom du contact
                  </div>
                </TableCell>
                <TableCell>Nom de l'Entreprise</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {statusIcons[task.status]}
                    <span className="ml-2">{task.status}</span>
                  </div>
                </TableCell>
                {/* <TableCell>
                  <div className="flex items-center">
                    {priorityIcons[task.priority]}
                    <span className="ml-2">{task.priority}</span>
                  </div>
                </TableCell> */}
                <TableCell>
                  <div> 01/01/2024</div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-muted-foreground">
          0 of 100 row(s) selected.
        </p>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <select className="h-8 w-[70px] rounded-md border border-input bg-background">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page 1 of 10
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="h-8 w-8 p-0">
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 p-0">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 p-0">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 p-0">
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DatatableExample;
