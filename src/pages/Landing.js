import React from "react";
import "/home/dickson/repos/oficina-layout/src/styles/styles.css";
import Navbar from "../components/Navbar";
import Mecanico from "../assets/mecanico.jpeg";

const background = {
  header: {
    backgroundImage: `url(${Mecanico})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 30, 100, 0.5)',
    color: 'white'
  }
};

const Landing = () => {
  return (
    <div>
      <Navbar menu="Início" />

      <div className="h-screen w-full from-gray-600" style={background.header}>
        <div style={background.content}>
          <div className="text-start w-1/2 absolute bottom-0 mb-20 ml-20 py-16">
        <h3 className="text-4xl text-blue-300">Oficina do Caju</h3>
            <div className="text-5xl ">
              <h1>Confie seu carro nas mãos de quem entende do assunto.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
