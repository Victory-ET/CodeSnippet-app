import { deleteSnippet } from "../../Fauna";
export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ msg: "unauthorized" });
  } 
  const { id } = req.body;
  try {
    const deleted = await deleteSnippet(id);
    return res.status(200).json(deleted);
  } catch (error) {
    console.log(error)
    res.status(500).join({ msg: "error occured" });
  }
}