"use client";

import React, { useState } from 'react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const CrossmintExample1: React.FC = () => {


  /**
   * GOAL:
   *  A client wants to implement embedded checkout, before doing so they tried to create a button to see if it would work. 
   *  The client is running into many issues and can't get this to work. Can you double check their configuration and help
   *  the client integrate with our embedded option?
   */

  const collectionId = "e5843357-8f4a-4e4f-9154-e9f63caa8686";
  const projectId = "33414c29-6f57-4f93-99c3-60e156a0b3c7";
  const environment = "production";
  const mintConfig = {
    "totalPrice":"175", // 175 USDC
    "_tokenId":"0", // TokenIds range from 0-6
    "_quantity":"1", // 1 NFT
    "_pricePerToken":"175000000", // value in wei
    "_currency":"0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", // USDC address
    "_data":"0x0000000000000000000000000000000000000000000000000000000000000000", // empty hex data, can be disregarded
    "_allowlistProof": { // this object can be disregarded, its needed to mint but doesnt do anything in our ciurrent setup
      "proof": [],  
      "quantityLimitPerWallet": "0", 
      "pricePerToken": "175000000",
      "currency": "0x0000000000000000000000000000000000000000"
    }
  };

  return (
    <>
      <div className="sm:col-span-3">

      <CrossmintPayButton
            collectionId = {collectionId}
            projectId = {projectId}
            mintConfig ={mintConfig}
            environment = {environment}
          />
      </div>
    </>
  );
}

export default CrossmintExample1;
