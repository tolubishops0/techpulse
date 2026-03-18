import { Suspense } from "react";
import { Navbar } from "@/components/NavBar";
import { User } from "@supabase/supabase-js";

interface Props {
  showSearch?: boolean;
  showActions?: boolean;
  activeLink?: "feed" | "about" | "faq" | "home";
  user?: User | null;
}

export function NavbarWrapper(props: Props) {
  return (
    <Suspense
      fallback={
        <header className="sticky top-0 z-50 w-full h-16 border-b border-white/10 bg-[#0a0a0a]/90" />
      }
    >
      <Navbar {...props} />
    </Suspense>
  );
}
