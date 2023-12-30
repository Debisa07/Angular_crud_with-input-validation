const express = require("express");
const router = express.Router();
const models = require("../models"); 

router.get("/", async (req, res) => {
  try {
    const employees = await models.EmployeeModel.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newEmployeeData = req.body; 
    // TODO: add validation if you want
    const newEmployee = new models.EmployeeModel(newEmployeeData);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee); 
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const employeeId = req.params.id;

  try {
    const deletedEmployee = await models.EmployeeModel.findByIdAndDelete(employeeId);

    if (deletedEmployee) {
      res.status(200).json({ message: "Employee deleted successfully", deletedEmployee });
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/:id", async (req, res) => {
  const employeeId = req.params.id;

  try {
    const employee = await models.EmployeeModel.findById(employeeId);

    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/:id", async (req, res) => {
  const employeeId = req.params.id;
  const updatedEmployeeData = req.body;

  try {
    const updatedEmployee = await models.EmployeeModel.findByIdAndUpdate(
      employeeId,
      updatedEmployeeData,
      { new: true }
    );

    if (updatedEmployee) {
      res.status(200).json(updatedEmployee);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
