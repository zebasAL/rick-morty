import type { NextApiRequest, NextApiResponse } from "next";
import { rmSDK } from "../../../lib/rick-morty/sdk";

async function episodes(_req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (_req.method) {
      case "GET":
        const body = await rmSDK.getAllEpisodes();
        res.status(200).json(body);
        break;

      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${_req.method} Not Allowed`);
        break;
    }
  } catch (error) {}
}

export default episodes;
