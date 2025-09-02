import { resendVerification } from "@onnasoft/pro-meets-core";
import { LoaderFunction, redirect } from "react-router";

export const loader: LoaderFunction = async ({ params }) => {
  const email = params.email;
  if (!email) throw new Response("Email requerido", { status: 400 });

  await resendVerification(email);

  return redirect("/verification-sent");
};


