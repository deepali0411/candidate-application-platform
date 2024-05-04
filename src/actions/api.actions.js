import { fetchJobsUrl } from "../services/services";

export const fetchJobsFromApi = async (offset, limit) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit,
    offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  return await fetch(fetchJobsUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
};
