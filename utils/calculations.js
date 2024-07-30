export const calculateBillSplit = (users, billAmount) => {
  const totalSalary = users.reduce((sum, user) => sum + user.salary, 0);

  return users.map((user) => {
    const proportion = user.salary / totalSalary;
    return billAmount * proportion;
  });
};
