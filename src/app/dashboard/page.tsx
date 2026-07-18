import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name || session.user.email}</h1>
      <p className="text-gray-600 mt-2">This is your ProofVault dashboard.</p>
    </div>
  )
}