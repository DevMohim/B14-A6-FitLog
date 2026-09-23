const getData = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Data Fetching Failed");
    }
    return res.json();
  } catch {
    {
      return [];
    }
  }
};

export default getData;

