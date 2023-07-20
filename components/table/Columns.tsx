"use client";

import { ColumnDef } from "@tanstack/react-table";

export type DataType = {
  name: string;
  role: string;
  phone: string;
  salary: string;
};

export const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },

  {
    accessorKey: "phone",
    header: "phone",
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },
];
