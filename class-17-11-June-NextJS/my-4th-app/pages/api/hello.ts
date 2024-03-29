// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.url);
  console.log(req.method);
  console.log(req.body);
  res.status(200).json({ name: "John Doe" });
}

// app.get('/api/login', (req, res) {
//   res.status(200).json({ name: "John Doe" });
// })
