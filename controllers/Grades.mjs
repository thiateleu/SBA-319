import { Grade } from "../models/Grades.mjs";

export const getGrades = async (req, res) => {
  try {
    const grades = await Grade.find().populate("student", "name");
    res.json(grades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createGrade = async (req, res) => {
  const grade = new Grade({
    studentName: req.body.studentName,
    type: req.body.type,
    score: req.body.score,
  });

  try {
    const newGrade = await grade.save();
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
