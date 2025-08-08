import { LoaderFunction, redirect } from "react-router";
import { resendVerification } from "~/services/auth";

export const loader: LoaderFunction = async ({ params }) => {
  const email = params.email;
  if (!email) throw new Response("Email requerido", { status: 400 });

  await resendVerification(email);

  return redirect("/verification-sent");
};


