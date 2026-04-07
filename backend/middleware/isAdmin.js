export const adminOnly = (req, res, next) => {
  // Check if department exists (user is authenticated)
  if (!req.department) {
    return res.status(401).json({ 
      success: false,
      message: 'Authentication required' 
    });
  }
  
  // Check if role is admin
  if (req.department.role !== 'admin') {
    return res.status(403).json({ 
      success: false,
      message: 'Admin access required. Your role: ' + req.department.role 
    });
  }
  
  next();
};