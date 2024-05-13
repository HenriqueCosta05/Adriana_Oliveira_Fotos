import React from 'react';
import Dropzone from 'react-dropzone';
import { FaUpload } from 'react-icons/fa';

const FolderCard = () => {
    return (
      <div className="flex flex-col h-64 border-2 border-gray-300 rounded-md m-4">
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section
              {...getRootProps()}
              className="flex flex-col items-center justify-center flex-1 p-6 border-t-2 border-dashed border-gray-300 hover:bg-gray-200 transition-colors duration-200 ease-in-out cursor-pointer"
            >
              <input {...getInputProps()} />
              <FaUpload className="text-4xl text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Arraste e solte arquivos aqui
              </p>
            </section>
          )}
        </Dropzone>
        <div className="flex-1 p-4 bg-gray-200">
          <h2 className="text-lg font-bold text-gray-700">
            Nome da Pasta
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Quantidade de fotos - x
          </p>
        </div>
      </div>
    );
};

export default FolderCard;