import { getResponse } from "../../Fauna.js";
export default async function handler(req, res) {
  console.log(req)
  if (req.method !== "GET") {
    return res.status(405);
  }
  try {
    const snippets = await getResponse();
    return res.status(200).json(snippets);
  } catch (err) {
    console.log(err);
     res.status(500).json({ msg: "Something went wrong." });
  }
}