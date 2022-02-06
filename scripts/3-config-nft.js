import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xe93d9C67999B11CB89C140B2E443FA647Cb280a2",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Dunno logo",
        description: "This NFT will give you access to DunnoDAO!",
        image: readFileSync("scripts/assets/dunno.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()