import React from 'react'
import { FaPeopleArrows } from 'react-icons/fa'

interface ClickZoneProps {
  isClient: boolean
}

export default function ClickZone({isClient}: ClickZoneProps) {
  return isClient ? (
    <section
      className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-pointer h-64 m-4"
      onClick={() => {
        console.log("123");
      }}
    >
      <FaPeopleArrows className="text-4xl text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Clique para associar a galeria a uma pasta
      </p>
    </section>
  ) : (
    <section
      className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-pointer h-64 m-4"
      onClick={() => {
        console.log("123");
      }}
    >
      <FaPeopleArrows className="text-4xl text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Clique para associar a galeria a um cliente
      </p>
    </section>
  );
}