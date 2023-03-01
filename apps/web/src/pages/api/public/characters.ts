import type { NextApiRequest, NextApiResponse } from "next";
import { rmSDK } from "../../../lib/rick-morty/sdk";

async function characters(_req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (_req.method) {
      case "GET":
        const body = await rmSDK.getAllCharacters();
        res.status(200).json(body);
        break;

      case "POST":
        // const { code, body } = await postSamples()
        // res.status(code).json(body);

        res.status(201).json("OK");
        break;

      default:
        res.status(404).json({ error: "This endpoint is not coded yet" });
        break;
    }
  } catch (error) {
    const err = JSON.parse(typeof error === "string" ? error : "");
    const errorCode = err?.code ?? 500;
    const errorMessage = err?.message ?? "Something went wrong";
    res.status(errorCode).json({ error: errorMessage });
  }
}

export default characters;
