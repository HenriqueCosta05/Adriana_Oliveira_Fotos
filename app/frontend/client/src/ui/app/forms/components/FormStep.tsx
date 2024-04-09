
export default function FormStep({step, totalOfSteps, children}) {
  return (
    <>
      <h2 className="">Etapa {step}/{totalOfSteps}</h2>
      {children}
    </>
  )
}
