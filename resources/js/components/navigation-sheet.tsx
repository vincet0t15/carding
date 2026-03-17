import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <Logo />

        <div className="mt-12 space-y-4 text-base">
          <Link className="inline-block" href="#">
            Home
          </Link>

          <div>
            <div className="font-bold">Food</div>
            <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
              1
            </ul>
          </div>

          <div>
            <div className="font-bold">Travel</div>
            <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
              1
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
