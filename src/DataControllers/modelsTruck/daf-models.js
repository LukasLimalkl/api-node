module.exports = (req, res) => {
  res.json({
    models: [
      {
        id: 1,
        nome: 'CF FTT 480',
      },
      {
        id: 2,
        nome: 'XF 105 FTT',
      },
      {
        id: 3,
        nome: 'XF FTT480',
      },
      {
        id: 4,
        nome: 'XF FTT530',
      },
    ],
  });
};
