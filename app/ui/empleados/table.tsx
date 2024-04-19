import { p_empleado } from "@prisma/client";
import Link from "next/link";
import { fetchEmpleadosActivos } from "@/app/lib/data";

export default async function EmpleadosTable({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) {
  const empleadosact: p_empleado[] = await fetchEmpleadosActivos(
    currentPage,
    query
  );
  function sortEMpleados() {
    empleadosact.sort(function (a: p_empleado, b: p_empleado) {
      if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
      if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
      return 0;
    });
  }
  return (
    <table className="table-fixed min-w-full bg-white shadow-md rounded-xl dark:bg-gray-800">
      <thead>
        <tr className="bg-cyan-500 text-gray-700">
          <th className="py-3 px-4 text-left">
            <></>ID
          </th>
          <th className="py-3 px-4 text-left">Nombre</th>
          <th className="py-3 px-4 text-left">Apellidos</th>
          <th className="py-3 px-4 text-left">Cargo</th>
        </tr>
      </thead>
      <tbody className="text-blue-gray-900">
        {empleadosact.map((empleado: p_empleado) => (
          <tr
            key={empleado.no_interno}
            className={
              empleado.activo
                ? "border-b border-blue-gray-200"
                : "border-b border-blue-gray-200 text-red-600"
            }
          >
            <td className="py-3 px-4">{empleado.no_interno}</td>
            <td className="py-3 px-4">
              <Link href={"/empleados/" + empleado.no_interno}>
                {empleado.nombre}
              </Link>
            </td>
            <td className="py-3 px-4 hover:animate-bounce cursor-pointer">
              {empleado.apell1 + " " + empleado.apell2}
            </td>
            <td className="py-3 px-4">{empleado.cargo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
