import React from "react";
import styles from "../styles/Home.module.css";
import Code from "./Code";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function Snippets({ snippet, snippetDeleted, email }) {
  const deleteSnippet = async () => {
    try {
      await fetch("/api/deleteSnippet", {
        method: "DELETE",
        body: JSON.stringify({ id: snippet.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      snippetDeleted();
    } catch (e) {
      console.log(e);
    }
  };
  const router = useRouter();

  return (
    <div className={styles.cont}>
      <p className={styles.lang}>{snippet.data.language}</p>
      <h3 className={styles.name}>{snippet.data.name}</h3>
      <p className={styles.descp}>{snippet.data.description}</p>
      <Code snippet={snippet} />
      {email == snippet.data.mail && (
        <>
          <div className={styles.links}>
            <Link href={`/edit/${snippet.id}`}>
              <a>Edit</a>
            </Link>
            <a onClick={deleteSnippet}>Delete</a>
          </div>
        </>
      )}
    </div>
  );
}

export default Snippets;
