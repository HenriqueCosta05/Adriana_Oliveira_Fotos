import { Flowbite, Spinner } from 'flowbite-react'
import { customTheme } from '../../components/Shared/FlowbiteCustomTheme/FlowbiteCustomTheme'

export default function Loading() {
    return (
      <Flowbite theme={{theme: customTheme}}>
            <Spinner color="primary" className="m-auto flex justify-center text-center" size="lg" />
            <p className="text-center text-primary">Carregando...</p>
      </Flowbite>
  )
}
