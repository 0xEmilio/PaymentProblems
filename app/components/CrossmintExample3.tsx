"use client";

import React, { useState } from 'react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const CrossmintExample3: React.FC = () => {

  /** 
   * Goal:
   * The client wants to send people to https://google.com on successful purchases and https://yahoo.com on failures.
   * The customer states that they whitelisted these domains on the console, they wanted to add them to the integration
   * but are unsure how to do so.
  */


  const collectionId = "0954f2b9-97a5-4248-9f7d-e313bce39c6d";
  const projectId = "33414c29-6f57-4f93-99c3-60e156a0b3c7";
  const environment = "staging";
  const mintConfig = {
    "type":"managed-erc-721",
    "quantity":"1", 
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

export default CrossmintExample3;
