"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  EyeIcon,
  EyeOffIcon,
  Edit2Icon,
} from "lucide-react";

type ColumnDef = {
  key: string;
  label: string;
  visible: boolean;
};

type DataEntry = {
  [key: string]: string | number;
  id: string;
};

type SortConfig = {
  key: string;
  direction: "asc" | "desc";
};

export const DataTable = () => {
  const [columns, setColumns] = useState<ColumnDef[]>([
    { key: "id", label: "ID", visible: true },
    { key: "name", label: "Name", visible: true },
    { key: "email", label: "Email", visible: true },
    { key: "role", label: "Role", visible: true },
  ]);

  const [data, setData] = useState<DataEntry[]>([
    { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
  ]);

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: "asc",
  });
  const [filter, setFilter] = useState<"blacklist" | "whitelist">("blacklist");
  const [filterList, setFilterList] = useState<string[]>([]);
  const [editingEntry, setEditingEntry] = useState<DataEntry | null>(null);

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const toggleColumnVisibility = (key: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.key === key ? { ...col, visible: !col.visible } : col
      )
    );
  };

  const toggleFilter = () => {
    setFilter((prev) => (prev === "blacklist" ? "whitelist" : "blacklist"));
  };

  const toggleFilterItem = (id: string) => {
    setFilterList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleEdit = (entry: DataEntry) => {
    setEditingEntry(entry);
  };

  const handleSaveEdit = () => {
    if (editingEntry) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === editingEntry.id ? editingEntry : item
        )
      );
      setEditingEntry(null);
    }
  };

  const sortedData = useMemo(() => {
    const filteredData = data.filter((item) =>
      filter === "blacklist"
        ? !filterList.includes(item.id)
        : filterList.includes(item.id)
    );

    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig, filter, filterList]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button onClick={toggleFilter}>
          {filter === "blacklist"
            ? "Switch to Whitelist"
            : "Switch to Blacklist"}
        </Button>
        <div className="flex space-x-2">
          {columns.map((col) => (
            <Button
              key={col.key}
              onClick={() => toggleColumnVisibility(col.key)}
              variant="outline"
              size="sm"
            >
              {col.visible ? (
                <EyeOffIcon className="w-4 h-4" />
              ) : (
                <EyeIcon className="w-4 h-4" />
              )}
              {col.label}
            </Button>
          ))}
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {columns
              .filter((col) => col.visible)
              .map((col) => (
                <TableHead
                  key={col.key}
                  className="cursor-pointer"
                  onClick={() => handleSort(col.key)}
                >
                  {col.label}
                  {sortConfig.key === col.key &&
                    (sortConfig.direction === "asc" ? (
                      <ChevronUpIcon className="inline ml-1 w-4 h-4" />
                    ) : (
                      <ChevronDownIcon className="inline ml-1 w-4 h-4" />
                    ))}
                </TableHead>
              ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((entry) => (
            <TableRow key={entry.id}>
              {columns
                .filter((col) => col.visible)
                .map((col) => (
                  <TableCell key={col.key}>{entry[col.key]}</TableCell>
                ))}
              <TableCell>
                <div className="flex space-x-2">
                  <Checkbox
                    id={`filter-${entry.id}`}
                    checked={filterList.includes(entry.id)}
                    onCheckedChange={() => toggleFilterItem(entry.id)}
                  />
                  <Label htmlFor={`filter-${entry.id}`} className="sr-only">
                    {filter === "blacklist" ? "Blacklist" : "Whitelist"}
                  </Label>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(entry)}
                      >
                        <Edit2Icon className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Entry</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        {columns.map((col) => (
                          <div
                            key={col.key}
                            className="grid grid-cols-4 items-center gap-4"
                          >
                            <Label htmlFor={col.key} className="text-right">
                              {col.label}
                            </Label>
                            <Input
                              id={col.key}
                              value={editingEntry?.[col.key] || ""}
                              onChange={(e) =>
                                setEditingEntry((prev) =>
                                  prev
                                    ? { ...prev, [col.key]: e.target.value }
                                    : null
                                )
                              }
                              className="col-span-3"
                            />
                          </div>
                        ))}
                      </div>
                      <Button onClick={handleSaveEdit}>Save changes</Button>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
