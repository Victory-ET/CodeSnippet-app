import { getSnippetById } from "../../Fauna";
import Upload from "../upload";

export default function Home({ snippet }) {
  const email = "";
  const user = "";
  return (
    <div>
      <h3>Update a snippet</h3>
      <Upload snippet={snippet} email={email} user={user} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    const snippet = await getSnippetById(id);
    return {
      props: { snippet },
    };
  } catch (error) {
    console.error(error);
    context.res.statusCode = 302;
    context.res.setHeader("Location", `/`);
    return { props: {} };
  }
}
