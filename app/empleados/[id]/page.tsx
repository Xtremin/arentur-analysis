import { fetchEmpleadoById, fetchUnidad } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const empleado = await fetchEmpleadoById(id);
  const unidad = await fetchUnidad(empleado?.unidad_org || 1);
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl">Empleado por id:</h1>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border-collapse border border-slate-500 py-3">
                Nombre
              </th>
              <th className="border-collapse border border-slate-500 py-3">
                Area
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="border-collapse border border-slate-500 px-5 hover:bg-cyan-600 cursor-pointer">
                {empleado?.nombre}
              </td>
              <td className="border-collapse border border-slate-500 px-5 hover:bg-cyan-600 cursor-pointer">
                {unidad?.descripcion}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
