import { Plant } from "../models/Plants.mjs";

export const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createPlant = async (req, res) => {
  const plant = new Plantlant({
    name: req.body.name,
    color: req.body.color,
    forEat: req.body.forEat,
  });

  try {
    const newPlant = await plant.save();
    res.status(201).json(newPlant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
