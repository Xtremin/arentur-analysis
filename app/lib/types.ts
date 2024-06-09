import { Prisma } from "@prisma/client";

export type p_empleado_n_cargos = Prisma.p_empleadoGetPayload<{
  include: { n_cargos: true };
}>;
