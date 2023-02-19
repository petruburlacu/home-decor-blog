import type { NextApiRequest, NextApiResponse } from "next";

export default function exit(reg: NextApiRequest, res: NextApiResponse) {
    res.clearPreviewData({});
    res.writeHead(307, { Location: "/" });
    res.end();
}