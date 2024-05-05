export const getFilteredList = ({
  searchInput,
  roles,
  experience,
  work,
  minBasePay,
  jdList,
}) => {
  const array = [
    "searchInput",
    "roles",
    "experience",
    "work",
    "minBasePay",
  ];
  const newList = array.reduce((acc, curr) => {
    if (curr === "searchInput") {
      return acc.filter(
        (data) =>
          (data?.companyName)
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          (data?.location).toLowerCase().includes(searchInput.toLowerCase())
      );
    } else if (curr === "experience" && experience > 0) {
      return acc.filter((data) => data?.minExp >= experience);
    } else if (curr === "minBasePay" && minBasePay > 0) {
      return acc.filter((data) => {
        return data?.minJdSalary >= minBasePay;
      });
    } else if (curr === "roles" && roles.length > 0) {
      return acc.filter((data) => roles.includes(data?.jobRole.toLowerCase()));
    } else if (curr === "work" && work.length > 0) {
      return acc.filter((data) => {
        if (work.length === 1 && work[0] === "remote") {
          return data?.location === "remote";
        }
        return true;
      });
    }
    return acc;
  }, jdList);

  return newList;
};

export const estimatedSalary = (min, max, salaryCurrencyCode) =>
`Estimated Salary ${
  salaryCurrencyCode === "USD" ? "$" : "Rs"
} ${min} - ${max} ${salaryCurrencyCode === "USD" ? "K" : "LPA"}`;