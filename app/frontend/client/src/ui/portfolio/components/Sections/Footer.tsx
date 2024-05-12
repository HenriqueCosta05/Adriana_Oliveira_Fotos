export default function Footer() {
  const currentDate = new Date().getFullYear().toString();
  return (
    <footer className="bg-primary container-fluid py-8 px-auto mb-0 absolute h-[90px] mt-[100px] bottom-0">
      <p className="font-medium text-[15px] text-white text-center">
        ©{currentDate} BooleanTech, todos os direitos reservados.
      </p>
    </footer>
  );
}
