import React from 'react';
import Image from "next/image";

import { useCrossmintEvents } from "@crossmint/client-sdk-react-ui";

interface MintingProps {
  orderIdentifier: string;
  environment: string;
}

const Minting: React.FC<MintingProps> = ({ orderIdentifier, environment }) => {
  const [status, setStatus] = React.useState<string>("pending"); // ["pending", "success", "failure"
  const [result, setResult] = React.useState<any>(null);
  const { listenToMintingEvents } = useCrossmintEvents({
    environment: environment,
  });
  const baseURI = (environment == "staging") ? "https://staging.crossmint.com" : "https://www.crossmint.com";

  if (status !== '') { // purposefully not using orderIdentifier here
    listenToMintingEvents(
      { orderIdentifier },
      (event) => {
        console.log(event);
        switch (event.type) {
          case "some event?":
            setStatus("success");
            setResult(event.payload);
            break;
          case "transaction:fulfillment.failed":
            setStatus("failure");
            break;
          default:
            break;
        }
        console.log(event.type, ':', event)
      }
    );
  }

  return (
    <>
      <div className="text-black font-mono p-5 text-center">
        {status === "pending" && (
          <>
            <h3>Minting your NFT...</h3>
            <Image
              src="/assets/sphere.gif"
              width={256}
              height={256}
              className="shrink mx-auto mt-10"
              alt="processing animation"
            />
            This may take up to a few minutes
          </>
        )}
        {status === "success" && (
          <>
            <h3>NFT Minted Successfully!</h3>
            <div className="mt-10">
              TxId: {result?.txId} <br></br>
              <a target="_blank" className="block bg-[#81feab] rounded-lg mt-3 p-3 text-black" href={`${baseURI}/user/collection/poly:${result?.contractAddress}:${result?.tokenIds[0]}`}>View in Crossmint</a>
            </div>
          </>
        )}
        {status === "failure" && (
          <>
            <h3>Failed to Mint NFT</h3>
            <p>Something went wrong. You will be refunded if the mint cannot be fulfilled successfully.</p>
          </>
        )}
      </div>
    </>
  );
}

export default Minting;