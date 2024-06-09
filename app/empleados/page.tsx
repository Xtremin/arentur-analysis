import { fetchEmpleadosPages } from "../lib/data";
import Pagination from "../ui/empleados/pagination";
import Table from "../ui/empleados/table";
import Search from "../ui/search";
import { p_empleado_n_cargos } from "../lib/types";
import { fetchEmpleadosActivos } from "../lib/data";
export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchEmpleadosPages(query);
  const empleadosact: p_empleado_n_cargos[] = await fetchEmpleadosActivos(
    currentPage,
    query
  );
  return (
    <>
      <div className="container mt-5 mx-auto flex min-h-screen justify-center">
        <div className="flex-col min-w-full">
          <Search placeholder="Buscar empleado"></Search>
          <Table empleadosact={empleadosact} />
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
