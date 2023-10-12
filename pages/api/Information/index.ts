import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
    res.json({teste: true})

}

export default handler