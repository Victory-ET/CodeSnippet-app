import { createSnippet } from '../../Fauna'

export default async function handler(req, res) {
  const { code, language, description, name, mail } = req.body;
  if (req.method !== 'POST') {
    return res.status(405).json({msg:'unauthorized'});
  }
  try {
    const createdSnippet = await createSnippet(code, language, description, name, mail);
    return res.status(200).json(createdSnippet)
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'unauthorized'})
  }
}