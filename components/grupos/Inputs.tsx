import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Inputs() {
  return (
    <div className="mt-2 flex flex-col gap-2">

      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />


      <Input type="password" placeholder="Senha" />
    </div>
  );
}