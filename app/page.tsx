import CollectionInfo from "./components/CollectionInfo";
import CrossmintExample1 from "./components/CrossmintExample1";
import CrossmintExample2 from "./components/CrossmintExample2";
import CrossmintExample3 from "./components/CrossmintExample3";
import CrossmintExample4 from "./components/CrossmintExample4";
import CrossmintExample5 from "./components/CrossmintExample5";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-4 p-4">  
      <CollectionInfo />

      { /*Comment in<>out as needed, one at a time*/
        <CrossmintExample1 />
        //<CrossmintExample2 />
        //<CrossmintExample3 />
        //<CrossmintExample4 />
        //<CrossmintExample5 />
      }
      
      </div>
    </div>
  )
}

/*

<CollectionInfo />
<Crossmint />

*/