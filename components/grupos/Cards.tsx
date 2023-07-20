import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";


export function CardWithForm({ title, description, children }: { title: string, description: string, children?: React.ReactNode; }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
        <CardDescription className="text-center ">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {
          children ? children : <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">

                <Input id="login" placeholder="Username" />
              </div>
              <div className="flex flex-col space-y-1.5">

                <Input id="password" placeholder="Password" />
              </div>

            </div>
          </form>
        }

      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Clear</Button>
        <Button type="submit">Submit</Button>
      </CardFooter>
    </Card>
  );
}
