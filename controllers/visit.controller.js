const VisitModal =require ("../models/Visit");
const mongoose =require("mongoose");

exports.createVisit = async (req, res) => {
  const visit = req.body;
  const newVisit = new VisitModal({
    ...visit,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newVisit.save();
    res.status(201).json(newVisit);
  } catch (error) {
    res.status(404).json({ message: "Something wrong" });
  }
};

exports.getVisits= async (req, res) => {
  try {
    const visits = await VisitModal.find();
    res.status(200).json(visits);
  } catch (error) {
    res.status(404).json({ message: "Something  wrong" });
  }
};
exports. getVisit = async (req, res) => {
  const { id } = req.params;
  try {
    const  Visit= await VisitModal.findById(id);
    res.status(200).json(Visit);
  } catch (error) {
    res.status(404).json({ message: "Something  wrong" });
  }
};

