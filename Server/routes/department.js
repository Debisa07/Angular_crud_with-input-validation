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
    // console.log({ newDepartmentData });
    const newDepartment = new models.DepartmentModel(newDepartmentData);
    const savedDepartment = await newDepartment.save();
    res.status(201).json(savedDepartment);
  } catch (error) {
    console.error("Error adding department:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const departmentId = req.params.id;

  try {
    const department = await models.DepartmentModel.findById(departmentId);

    if (department) {
      res.status(200).json(department);
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (error) {
    console.error("Error fetching department:", error);
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

router.post("/:id", async (req, res) => {
  const departmentid = req.params.id;
  const updatedDepartmentData = req.body;

  console.log({ updatedDepartmentData });

  try {
    const updatedEmployee = await models.DepartmentModel.findByIdAndUpdate(
      { _id: departmentid },
      updatedDepartmentData,
      { new: true }
    );

    console.log({ updatedEmployee });

    if (updatedEmployee) {
      res.status(200).json({ employee: updatedEmployee });
    } else {
      res.status(404).json({ error: "Employee not found" });
    }

  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;