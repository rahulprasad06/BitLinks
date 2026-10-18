import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export const instant = false;

export default async function Page({ params }) {
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });

  if (doc) {
    redirect(doc.url);
  }

  redirect("/");
}