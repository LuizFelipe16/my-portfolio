import Head from "next/head";
import { appVariables } from "../../app";

interface TitlePageProps {
  t: string;
}

export const TitlePage = ({ t: titlePage }: TitlePageProps) => {
  return (
    <Head><title>{appVariables.nameProject} | {titlePage}</title></Head>
  );
}
