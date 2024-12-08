import Link from "next/link";
import Card from "../../../components/Card";
// import Card from "@/components/Card";
export default function Archived() {
  return (
    <Card>
      <p>Archived &nbsp;</p>
      <Link className="text-blue-400 underline" href="/dashboard">Notifications</Link>
    </Card>
  );
}
