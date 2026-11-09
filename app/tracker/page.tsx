import type { Metadata } from "next"
import { TrackerDashboard } from "@/components/tracker-dashboard"

export const revalidate = 300

export const metadata: Metadata = {
  title: "World Tracker | CBDC LTD",
  description: "Track central bank digital currency projects worldwide with CBDC LTD.",
}

export default function TrackerPage() {
  return <TrackerDashboard />
}
