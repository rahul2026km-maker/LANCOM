export const departmentOnly = (req, res, next) => {
  if (!req.department) {
    return res.status(401).json({ 
      success: false,
      message: 'Authentication required' 
    });
  }
  
  if (req.department.role !== 'department' && req.department.role !== 'admin') {
    return res.status(403).json({ 
      success: false,
      message: 'Department access required' 
    });
  }
  
  next();
};