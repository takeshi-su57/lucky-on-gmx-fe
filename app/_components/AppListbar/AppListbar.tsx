"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/react";

import gnsSrc from "@/assets/icons/gns.png";
import gmxSrc from "@/assets/icons/gmx.png";

export const links = [
  {
    id: "gns",
    component: <Image src={gnsSrc} className="h-10 w-10" alt="GNS" />,
  },
  {
    id: "gmx",
    component: <Image src={gmxSrc} className="h-10 w-10" alt="GMX" />,
  },
];

export function AppListbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-3 p-3">
      {links.map((item) => (
        <Button
          isIconOnly
          key={item.id}
          variant="flat"
          color={pathname.includes(item.id) ? "primary" : "default"}
          className="h-16 w-16 items-center justify-center"
          onPress={() => router.push(`${item.id}`)}
        >
          {item.component}
        </Button>
      ))}
    </div>
  );
}
