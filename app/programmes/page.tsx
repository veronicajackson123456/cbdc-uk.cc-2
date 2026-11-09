import { redirect } from "next/navigation"

export default function ProgrammesAliasPage() {
  redirect("/programmes-to-watch")
}

export const metadata = {
  title: "Programmes to Watch | CBDC LTD",
}

export const dynamic = "force-static"
