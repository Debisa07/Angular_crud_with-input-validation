const express = require("express");
const router = express.Router();
const models = require("../models"); 

router.get("/", async (req, res) => {
  try {
    const departments = await models.DepartmentModel.find();
    res.status(200).json(departments);
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newDepartmentData = req.body;
    const newDepartment = new models.DepartmentModel(newDepartmentData);
    const savedDepartment = await newDepartment.save();
    res.status(201).json(savedDepartment);
  } catch (error) {
    console.error("Error adding department:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const departmentId = req.params.id;

  try {
    const deletedDepartment = await models.DepartmentModel.findByIdAndDelete(departmentId);

    if (deletedDepartment) {
      res.status(200).json({ message: "Department deleted successfully", deletedDepartment });
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (error) {
    console.error("Error deleting department:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;