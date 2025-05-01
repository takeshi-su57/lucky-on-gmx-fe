import { LinkItem, Sidebar } from "@/app-components/Sidebar/Sidebar";

const links: LinkItem[] = [
  {
    id: "leaderboards",
    label: "Leaderboard",
    title: "",
    limited: "Public",
  },
  {
    id: "settings",
    label: "Setting",
    title: "",
    limited: "Public",
    showDivider: true,
  },
];

export default function Page() {
  return <Sidebar suffix="gns" links={links} />;
}
