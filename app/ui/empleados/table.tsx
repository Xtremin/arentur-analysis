import { p_empleado_n_cargos } from "@/app/lib/types";
import Link from "next/link";
import { fetchEmpleadosActivos } from "@/app/lib/data";

export default async function EmpleadosTable({
  empleadosact,
}: {
  empleadosact: p_empleado_n_cargos[];
}) {
  function sortEMpleados() {
    empleadosact.sort(function (
      a: p_empleado_n_cargos,
      b: p_empleado_n_cargos
    ) {
      if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
      if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
      return 0;
    });
  }
  let edit: boolean = false;
  function handleClick() {
    edit = !edit;
  }
  return (
    <table className="table-fixed min-w-full bg-white shadow-md rounded-xl dark:bg-gray-800 border border-cyan-500">
      <thead>
        <tr className="bg-cyan-500 text-gray-700 border border-cyan-500">
          <th className="py-3 px-4 text-left">
            <></>ID
          </th>
          <th className="py-3 px-4 text-left">Nombre</th>
          <th className="py-3 px-4 text-left">Apellidos</th>
          <th className="py-3 px-4 text-left">Cargo</th>
          <th className="py-3 px-4 text-left">Salario</th>
        </tr>
      </thead>
      <tbody className="text-blue-gray-900">
        {empleadosact.map((empleado: p_empleado_n_cargos) => (
          <tr
            key={empleado.no_interno}
            className={
              empleado.activo
                ? "border-b border-cyan-500"
                : "border-b border-cyan-500 text-red-600 border-r-2"
            }
          >
            <td className="py-3 px-4">{empleado.no_interno}</td>
            <td className="py-3 px-4">
              {edit ? (
                <input defaultValue={empleado.nombre}></input>
              ) : (
                <Link href={"/empleados/" + empleado.no_interno}>
                  {empleado.nombre}
                </Link>
              )}
              <button className="px-2">edit</button>
            </td>
            <td className="py-3 px-4 cursor-pointer">
              {empleado.apell1 + " " + empleado.apell2}
            </td>
            <td className="py-3 px-4">{empleado.n_cargos.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
