"use client";

import React, { useState } from 'react';
import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui";

const CrossmintExample2: React.FC = () => {

  /** 
   * Goal:
   * The client has been trying to set up embedded checkout and they swear the configuration and the price is correct
   *  but the checkout will never let them press "Pay". The client is leaning on your to figure out why this is not loading,
   *  It has to be something simple -- the configuration looks correct?
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

        
          <CrossmintPaymentElement
            collectionId = {collectionId}
            projectId = {projectId}
            mintConfig ={mintConfig}
            environment = {environment}
          />
      </div>
    </>
  );
}

export default CrossmintExample2;
