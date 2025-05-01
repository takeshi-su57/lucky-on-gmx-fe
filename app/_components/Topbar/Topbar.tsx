"use client";

import Image from "next/image";
import Link from "next/link";

import logoSrc from "@/assets/icons/logo.png";

import WalletConnectButton from "./WalletConnectButton";

export function Topbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <Link href="#">
          <div className="flex items-center gap-6 border-neutral-800">
            <Image src={logoSrc} alt="Logo" className="h-14 w-14" />
            <h6 className="text-3xl font-bold text-yellow-600">Lucky Plans</h6>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <WalletConnectButton />
      </div>
    </div>
  );
}
