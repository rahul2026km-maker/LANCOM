import bcrypt from 'bcryptjs';
import Department from '../models/Department.js';

export const registerDepartment = async (req, res) => {
  try {
    const { department, email, password, description, phone, headName, role } = req.body;
    console.log( "running...........................")
    console.log( req.body , " this is my request  body")


    const existingDept = await Department.findOne({ 
      $or: [{ email }, { department }] 
    });
    
    if (existingDept) {
      return res.status(400).json({ 
        success: false,
        message: 'Department with this name or email already exists' 
      });
    }

    // ✅ Hash password in controller
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new department with hashed password
    const newDepartment = await Department.create({
      department: department.toUpperCase(),
      email: email.toLowerCase(),
      password: hashedPassword,  // Save hashed password
      description: description || '',
      phone: phone || '',
      headName: headName || '',
      role: role || 'department',
      status: 'active'
    });

    // Remove password from response
    const departmentData = newDepartment.toObject();
    delete departmentData.password;

    res.status(201).json({ 
      success: true, 
      message: `Department "${department}" registered successfully!`,
      data: departmentData 
    });

  } catch (error) {
    // Handle duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ 
        success: false,
        message: `${field} already exists. Please use a different ${field}.` 
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find({ role: 'department' })
      .select('-password')
      .sort({ name: 1 });
    res.json({ success: true, departments });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
