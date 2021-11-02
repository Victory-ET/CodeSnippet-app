const faunadb = require("faunadb");
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNA_SECRET,
});
const q = faunadb.query;
const getResponse = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("codesnippet"))),
      q.Lambda("doc", q.Get(q.Var("doc")))
    )
  );
  const snippets = data.map((snippet) => {
    snippet.id = snippet.ref.id;
    delete snippet.ref;
    return snippet;
  });
  return snippets;
};

const createSnippet = async (code, language, description, name, mail) => {
  return await faunaClient.query(q.Create(q.Collection('codesnippet'), {
    data:{code, language, description, name, mail}
  }))
}

const updateSnippet = async (id, code, language, description, name) => {
  return await faunaClient.query(q.Update(q.Ref(q.Collection('codesnippet'), id), {
    data: {code, language, name, description},
  }))
}

const getSnippetById = async (id) => {
  const snippet = await faunaClient.query(q.Get(q.Ref(q.Collection('codesnippet'),id)))
  snippet.id = snippet.ref.id;
  delete snippet.ref;
  return snippet;
}

const deleteSnippet = async (id) => {
  return await faunaClient.query(q.Delete(q.Ref(q.Collection('codesnippet'),id)))
}


module.exports = {
  getResponse,
  createSnippet,
  updateSnippet,
  getSnippetById,
  deleteSnippet,
};

// getResponse();

