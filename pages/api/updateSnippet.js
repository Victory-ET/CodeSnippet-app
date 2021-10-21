import { updateSnippet } from "../../Fauna.js";

export default async function handler(req, res) {
  const { id, code, language, description, name } = req.body;
  if (req.method !== "PUT") {
    return res.status(405).json({ msg: "unauthorized" });
  }
  try {
    const updated = await updateSnippet(
      id,
      code,
      language,
      description,
      name
    );
    return res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "unauthorized" });
  }
}
