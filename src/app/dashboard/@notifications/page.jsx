import Link from "next/link";
import Card from "../../components/Card";
// import Card from "@/components/Card";
export default function Archived() {
  return (
    <Card>
      <p>Notifications &nbsp;</p>
      <Link className="text-blue-400 underline" href="/dashboard/archived">Archived</Link>
    </Card>
  );
}
