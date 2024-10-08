"use client";

import React, { useState } from 'react';
import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui";
import Minting from './Minting';

const CrossmintExample5: React.FC = () => {
  const [orderIdentifier, setOrderIdentifier] = useState<string | null>(null);

  /** 
   * Goal:
   * The client wants to make the clientside events work. Can you help them?
   * 
   * Hint: Minting.tsx might have some things that need to be updated as well.
   * 
   * Use chatGPT if needed, but please try to understand how the events work!
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

        {orderIdentifier === null ? (
          <CrossmintPaymentElement
            collectionId = {collectionId}
            projectId = {projectId}
            mintConfig ={mintConfig}
            environment = {environment}
            recipient={{email:"emilio@paella.dev"}}


            onEvent={(event) => {
              switch (event.type) {
                case "some event.....":
                  console.log(event);
                  setOrderIdentifier(event.payload.something);
                  break;
                default:
                  console.log(event);
                  break;
              }}}
          />
        ) : (
          <Minting orderIdentifier={??} environment={environment} />
        )}
      </div>
    </>
  );
}

export default CrossmintExample5;
