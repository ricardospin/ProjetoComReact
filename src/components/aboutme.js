import React, { useState } from 'react';

const AboutMe = () => {
  const [address, setAddress] = useState(null);

  const fetchAddress = async () => {
    const response = await fetch('https://viacep.com.br/ws/06626050/json/');
    const data = await response.json();
    setAddress(data);
  };

  return (
    <div className="container">
      <h2>Sobre Mim</h2>
      <p>Nome: Ricardo Pinheiro</p>
      <p>Idade: 21 anos</p>
      <p>Nacionalidade: Brasileira</p>
      <p>Estudante de Sistemas para Internet e Marketing</p>
      <p>CEP: 06626-050</p>
      <button onClick={fetchAddress}>Endereço Completo</button>
      {address && (
        <div className="address-info">
          <p>Rua: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade: {address.localidade}</p>
          <p>Estado: {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
