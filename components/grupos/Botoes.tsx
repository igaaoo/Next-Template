import { buttonVariants } from "@/components/ui/button";
import { Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";


export function Botoes() {
  return (
    <div className="mt-2 flex flex-wrap gap-4">

      <button
        className={buttonVariants()}
      >
        Primary
      </button>

      <button
        className={buttonVariants({ variant: "outline" })}
      >
        Outlined
      </button>

      <button
        className={buttonVariants({ variant: "destructive" })}
      >
        Destructive
      </button>

      <button
        className={buttonVariants({ variant: "ghost" })}
      >
        Ghost
      </button>


      <button
        className={buttonVariants({ variant: "link" })}
      >
        Link
      </button>


      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>

    </div>
  );
}