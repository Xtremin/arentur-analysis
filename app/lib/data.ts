import prisma from "./prisma";

const ITEMS_PER_PAGE = 10;
export async function fetchEmpleadosActivos(
  currentPage: number,
  query: string
) {
  try {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const empleadosact = await prisma.p_empleado.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: { nombre: { contains: query } },
    });
    console.log("Cargados empleados");
    return empleadosact;
  } catch (error) {
    throw new Error("Error cargando trabajadores activos");
  }
}

export async function fetchEmpleadoById(id: string) {
  try {
    const empleado = await prisma.p_empleado.findUnique({
      where: { no_interno: id },
    });
    return empleado;
  } catch (error) {
    throw new Error("No se encontró el trabajador especificado");
  }
}

export async function fetchEmpleadosPages(query: string) {
  const countempleados = await prisma.p_empleado.count({
    where: { nombre: { contains: query } },
  });
  const totalPages = Math.ceil(countempleados / ITEMS_PER_PAGE);
  return totalPages;
}

export async function fetchUnidad(id: number) {
  const unidad = await prisma.n_unidad_org.findUnique({
    where: { id_uorg: id },
  });
  return unidad;
}
