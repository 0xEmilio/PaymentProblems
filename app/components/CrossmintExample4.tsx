"use client";

import React, { useState } from 'react';
import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui";

const CrossmintExample4: React.FC = () => {

  /** 
   * Goal:
   * The client wants to remove all mobile payment options. They also want to customize the UI a little bit.
   * 
   * Could you please remove the mobile payment methods (apple pay and google pay) + customize the UI for them? 
   * 
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
            recipient={{email:"emilio@paella.dev"}}
          />
      </div>
    </>
  );
}

export default CrossmintExample4;
