module.exports = (req, res) => {
  res.json({
    models: [
      {
        id: 1,
        nome: 'Axor',
      },
    ],
  });
};
