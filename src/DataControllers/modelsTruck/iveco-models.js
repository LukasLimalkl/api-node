module.exports = (req, res) => {
  res.json({
    models: [
      {
        id: 1,
        nome: 'S-WAY 480',
      },
      {
        id: 2,
        nome: 'S-WAY 540',
      },
      {
        id: 3,
        nome: 'STRALLIS 800',
      },
      {
        id: 4,
        nome: 'STRALLIS HI-WAY 800',
      },
    ],
  });
};