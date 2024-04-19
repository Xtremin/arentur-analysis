import Navbarc from "../ui/navbar";
export default function EmpleadosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="">
        <Navbarc />
        {children}
      </div>
    </>
  );
}
