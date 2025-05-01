"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { Button } from "@heroui/react";
import { FaArrowDown, FaExclamationTriangle, FaPowerOff } from "react-icons/fa";

export default function WalletConnectButton() {
  const account = useAccount();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!isConnected && account.status === "connected") {
      setIsConnected(true);
    }
  }, [account.status, isConnected]);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        connectModalOpen,
        mounted,
      }) => {
        const handleWalletConnect = () => {
          openConnectModal();
        };

        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (connectModalOpen) {
                return (
                  <Button
                    variant="ghost"
                    onPress={openConnectModal}
                    className="flex w-fit rounded px-[17px] text-white"
                    isLoading={true}
                  >
                    Connecting...
                  </Button>
                );
              }

              if (!connected) {
                return (
                  <Button
                    variant="ghost"
                    onPress={() => {
                      handleWalletConnect();
                    }}
                    className="w-fit rounded font-bold text-white"
                  >
                    Connect Wallet
                    <FaPowerOff />
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    variant="ghost"
                    color="danger"
                    onPress={openChainModal}
                    className="!text-red-600"
                  >
                    <FaExclamationTriangle size={20} className="text-red-600" />
                    Wrong Network
                  </Button>
                );
              }

              return (
                <div className="flex items-center gap-3 md:gap-5">
                  <Button variant="ghost" onPress={openChainModal}>
                    {chain.iconUrl ? (
                      <Image
                        src={chain.iconUrl}
                        alt="Chain Icon"
                        height={20}
                        width={20}
                      />
                    ) : null}
                    <span className="hidden md:inline">
                      {chain.name ? chain.name : ""}
                    </span>
                    <FaArrowDown size={12} className="text-gray-400" />
                  </Button>

                  <Button variant="ghost" onPress={openAccountModal}>
                    {chain.iconUrl ? (
                      <Image
                        src={chain.iconUrl}
                        alt="Chain Icon"
                        height={20}
                        width={20}
                      />
                    ) : null}
                    <span className="hidden md:inline">
                      {account.address.substring(0, 7)}
                    </span>
                    <FaArrowDown size={12} className="text-gray-400" />
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
