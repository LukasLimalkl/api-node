const { sequelize, caminhao } = require('../Models/index');

const mediaTrucks = async (req, res) => {
  try {
    await sequelize.sync();

    const { truck, model, ano, media } = req.body;

    caminhao.create({
      truck,
      model,
      ano,
      media,
    });

    return res.status(201).json({ message: 'Dados enviados com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
    return res.status(500).json({ message: 'Erro ao enviar dados!' });
  }
};

module.exports = {
  mediaTrucks,
};
