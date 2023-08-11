module.exports = (req, res) => {
  res.json({
    marca: [
      {
        id: 1,
        nome: 'Volvo',
      },
      {
        id: 2,
        nome: 'Mercedes',
      },
      {
        id: 3,
        nome: 'Scania',
      },
      {
        id: 4,
        nome: 'Man',
      },
      {
        id: 5,
        nome: 'Iveco',
      },
      {
        id: 6,
        nome: 'Daf',
      },
    ],
  });
};
