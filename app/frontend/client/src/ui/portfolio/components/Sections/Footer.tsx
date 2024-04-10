
export default function Footer() {
    const currentDate = new Date().getFullYear().toString();
  return (
    <footer className="bg-primary container py-4 px-auto w-screen">
      <p className="font-medium text-[15px] text-black text-center">
        Copyright {currentDate}
      </p>
      <p className="font-medium text-[15px] text-black text-center">
        BooleanTech, todos os direitos reservados
      </p>
    </footer>
  );
}
