import { nomina_sal } from "@prisma/client";
import { fetchNomina } from "../lib/data";
export default async function Page() {
  const nomina: nomina_sal[] = await fetchNomina();
  return <>asd</>;
}
