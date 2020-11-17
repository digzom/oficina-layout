import React from "react";

export default function Card() {
  return (
    <div className="absolute my-64 mr-20 right-0 border w-2/5 p-10 bg-gray-800 bg-opacity-75">
      <div className="grid gap-6 grid-cols-3">
        <span className="">
          <h1 className="text-xl flex mb-3">Preço justo</h1><hr className="w-10" />
          <p className="text-sm  pt-3 pr-3">Na hora de fazer valer nosso serviço, prezamos pelo máximo de honestidade. Trabalhamos com um valor justo e acessível.</p>
        </span>
        <span>
          <h1 className="text-xl flex mb-3">Agilidade</h1><hr className="w-10" />
          <p className="text-sm  pt-3 pr-3 pb-4">Oferecemos um serviço sem enrolação, mas sem perder alta qualidade que é o padrão de nosso dia-a-dia com tecnologia de ponta.</p>
        </span>
        <span>
          <h1 className="text-xl flex mb-3">Transparência</h1><hr className="w-10" />
          <p className="text-sm  pt-3 pr-3 pb-4">Na nossa oficina você sempre pode sentir-se bem-vindo para visitar e olhar como está o serviço do seu carro. </p>
        </span>
      </div>
    </div>
  );
}
