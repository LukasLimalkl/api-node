module.exports = (req, res) => {
  res.json({
    models: [
      {
        id: 1,
        nome: 'TGX 28.440',
      },
      {
        id: 2,
        nome: 'TGX 29.440 ',
      },
      {
        id: 3,
        nome: 'TGX 29.480 ',
      },
    ],
  });
};
