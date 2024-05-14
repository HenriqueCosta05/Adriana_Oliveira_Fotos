import Dropzone from "react-dropzone";
import { FaUpload } from "react-icons/fa";

export default function DropZone() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section {...getRootProps()} className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-pointer h-64 m-4">
          <input {...getInputProps()} />
          <input
            multiple
            type="hidden"
            name="section"
            value="yourSectionValue" 
          />
          <FaUpload className="text-4xl text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Arraste e solte arquivos aqui, ou clique para selecionar arquivos
          </p>
        </section>
      )}
    </Dropzone>
  );
}