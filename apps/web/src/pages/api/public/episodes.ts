import type { NextApiRequest, NextApiResponse } from "next";

async function episodes(_req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (_req.method) {
      case "GET":
        //const body = await rmSDK.getAllLocations();
        res.status(200).json(`Some fetching of episodes`);
        break;

      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${_req.method} Not Allowed`);
        break;
    }
  } catch (error) {}
}

export default episodes;
