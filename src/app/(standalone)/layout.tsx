import { UserButton } from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";

interface CreateWorkspaceLayoutProps {
  children: React.ReactNode;
}

const CreateWorkspaceLayout = ({ children }: CreateWorkspaceLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
          <Link href="/">
            <Image
              src={"/linelogo.png"}
              alt="logo"
              width={150}
              height={30}
              className="object-contain"
            />
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default CreateWorkspaceLayout;
