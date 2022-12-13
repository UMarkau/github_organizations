import { useState, useEffect } from "react";
import { IOrganization } from "./types";
import { fetchOrganizations } from "./api";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [organizations, setOrganizations] = useState<IOrganization[]>([]);

  useEffect(() => {
    const getOrgs = async () => {
      setLoading(true);
      const orgs = await fetchOrganizations();
      setOrganizations(orgs.data);
      setLoading(false);
    };

    getOrgs();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <div></div>;
};

export default App;
