'use client';

import { useDataContext } from "@/context/DataContext";

import { DataTable } from "@/components/table/Datatable";
import { columns } from "@/components/table/Columns";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fakeData } from "@/lib/utils/FakeData";
import { useEffect } from "react";


export default function IndexPage() {
  const { data, setData } = useDataContext();


  useEffect(() => {
    // Get data from API and set to data
    setData(fakeData);
  }, []);


  return (
    <section className="flex justify-center gap-6 pb-8 pt-6 md:py-10">

      {data.length <= 1 && <Button disabled className="top-30 absolute">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Carregando Dados...
      </Button>}

      <DataTable columns={columns} data={data} />

    </section>
  );
}
