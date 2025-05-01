import { LinkItem, Sidebar } from "@/app-components/Sidebar/Sidebar";

const links: LinkItem[] = [
  { id: "plans", label: "Plan", title: "" },
  {
    id: "automations",
    label: "Automation",
    title: "",
  },
  {
    id: "followers",
    label: "Follower",
    title: "",
    showDivider: true,
  },
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
  {
    id: "traders",
    label: "Trader",
    title: "",
    isDevMode: true,
  },
  {
    id: "tags",
    label: "Tag",
    title: "",
    showDivider: true,
    isDevMode: true,
  },
  {
    id: "logs",
    label: "Log",
    title: "",
    isDevMode: true,
  },
];

export default function Page() {
  return <Sidebar suffix="gns" links={links} />;
}
