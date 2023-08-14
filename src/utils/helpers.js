const handleSearch = (data, searchValue) => {
  console.log(data);
  const filteredData = data
    ? data.filter((hospital) => {
        const matchingServices =
          hospital.services &&
          hospital.services.some(
            (service) =>
              service.name === searchValue ||
              service.description === searchValue
          );
        return (
          hospital.name.toUpperCase() === searchValue.toUpperCase() ||
          hospital.location
            .toUpperCase()
            .split("-")
            .includes(searchValue.toUpperCase()) ||
          matchingServices
        );
      })
    : [];
  console.log("from helper ...");
  console.log(filteredData);
  return filteredData;
};

export { handleSearch };
