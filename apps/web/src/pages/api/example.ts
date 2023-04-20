import type { NextApiRequest, NextApiResponse } from "next";
import { example } from "../../services/example";
// import { getSamples, postSamples } = '../../utils/samples'

type Data = string | Object
type Body = string

async function examaple(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body: Body = _req.body

  try {
    switch (_req.method) {
      case 'GET':
        const user = await example()
        res.status(200).json(user);
        break;
      case 'POST':
        // const { code, body } = await postSamples()
        // res.status(code).json(body);

        res.status(200).json('OK');
        break;
    
      default:
        // res.status(404).json({ error: 'This endpoint is not coded yet' });
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${_req.method} Not Allowed`);
        break;
    }
  } catch(error) {
    const err = JSON.parse(typeof error === 'string' ? error : '')
    const errorCode = err?.code ?? 500
    const errorMessage = err?.message ?? 'Something went wrong'
    res.status(errorCode).json({ error: errorMessage });
  }
}

export default examaple;
