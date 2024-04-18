import { NextApiRequest, NextApiResponse } from "next";

export const adminAuthMiddleware = (
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>,
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const isAdmin: boolean = false;

    if (!isAdmin) {
      res.status(401).json({ error: "Недостаточно прав доступа" });
      return;
    }

    return await handler(req, res);
  };
};
