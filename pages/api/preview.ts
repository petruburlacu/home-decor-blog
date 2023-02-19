import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(reg: NextApiRequest, res: NextApiResponse) {
    res.setPreviewData({});
    res.writeHead(307, { Location: "/" });
    res.end();
}