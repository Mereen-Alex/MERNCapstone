import asyncHandler from "express-async-handler";
import Cake from "../models/cakeModel.js";

// @Public  GET /api/cakes
const getCakes = asyncHandler(async (req, res) => {
  const cakes = await Cake.find({});
  res.json(cakes);
});

// @Public  GET /api/cakes/:id
const getCakeById = asyncHandler(async (req, res) => {
  const cake = await Cake.findById(req.params.id);

  if (cake) {
    res.json(cake);
  } else {
    res.status(404);
    throw new Error("Cake not found");
  }
});

// @Private (admin)   POST /api/cakes
const createCake = asyncHandler(async (req, res) => {
  const { name, category, description, cakeflavor, sizes, image, price } =
    req.body;

  const cake = new Cake({
    name,
    category,
    description,
    cakeflavor,
    sizes,
    image,
    price,
  });

  const createdCake = await cake.save();
  res.status(201).json(createdCake);
});

// @Private (admin)   PUT /api/cakes/:id
const updateCake = asyncHandler(async (req, res) => {
  const { name, category, description, cakeflavor, sizes, image, price } =
    req.body;

  const cake = await Cake.findById(req.params.id);

  if (cake) {
    cake.name = name;
    cake.category = category;
    cake.description = description;
    cake.cakeflavor = cakeflavor;
    cake.sizes = sizes;
    cake.image = image;
    cake.price = price;

    const updatedCake = await cake.save();
    res.json(updatedCake);
  } else {
    res.status(404);
    throw new Error("Cake not found");
  }
});

// @Private (admin)  DELETE /api/cakes/:id
const deleteCake = asyncHandler(async (req, res) => {
  const cake = await Cake.findById(req.params.id);

  if (cake) {
    await cake.remove();
    res.json({ message: "Cake removed" });
  } else {
    res.status(404);
    throw new Error("Cake not found");
  }
});

export { getCakes, getCakeById, createCake, updateCake, deleteCake };
