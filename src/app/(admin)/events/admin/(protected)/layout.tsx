import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Header from "@/components/admin/admin-header";
import { authOptions } from "@/lib/auth";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.is_admin) {
    redirect("/events/admin/login");
  }

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
