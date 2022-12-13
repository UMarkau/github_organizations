import { useState, useEffect } from "react";
import { IOrganization } from "./types";
import { fetchOrganizations } from "./api";
import { InfoBadge } from "./components";

import "./App.scss";

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

  return (
    <div className="App">
      <div className="AppContent">
        <div>
          <h1>GitHub organizations and their members</h1>
          <div className="AppContentBadges">
            {organizations.map((organization) => (
              <InfoBadge organization={organization} key={organization.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
