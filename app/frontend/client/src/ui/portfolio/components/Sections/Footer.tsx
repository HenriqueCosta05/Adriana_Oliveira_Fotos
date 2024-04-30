export default function Footer() {
  const currentDate = new Date().getFullYear().toString();
  return (
    <footer className="bg-primary container-fluid py-8 px-auto w-full">
      <p className="font-medium text-[15px] text-black text-center">
        ©{currentDate} BooleanTech, todos os direitos reservados.
      </p>
    </footer>
  );
}
