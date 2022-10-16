import type { NextApiRequest, NextApiResponse } from "next";
import { rmSDK } from "../../../lib/rick-morty/sdk";

async function characters(_req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (_req.method) {
      case "GET":
        const body = await rmSDK.getAllCharacters();
        res.status(200).json(body);
        console.log("this body", body);

      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${_req.method} Not Allowed`);
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
