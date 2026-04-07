import Department from '../models/Department.js';

export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find({ 
      status: 'active',
      _id: { $ne: req.department._id } // Don't show own department
    })
      .select('-password')
      .sort({ name: 1 });
    res.json({ success: true, departments });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};