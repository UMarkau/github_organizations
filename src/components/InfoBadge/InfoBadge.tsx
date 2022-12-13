import { useState, useEffect } from "react";
import { fetchOrgPublicMembers } from "../../api";
import ArrowIcon from "../../assets/arrow.svg";
import { IOrganization, IPublicMember } from "../../types";
import { Info } from "./components";

import "./InfoBadge.scss";

interface IProps {
  organization: IOrganization;
}

export const InfoBadge = ({ organization }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [publicMembers, setPublicMembers] = useState<IPublicMember[]>([]);

  useEffect(() => {
    const getOrgPublicMembers = async () => {
      const orgPublicMembers = await fetchOrgPublicMembers(organization.login);
      setPublicMembers(orgPublicMembers.data);
    };

    getOrgPublicMembers();
  }, [organization.login]);

  return (
    <div
      className={`InfoBadge ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Info
        avatarUrl={organization.avatar_url}
        id={organization.id}
        nodeId={organization.node_id}
        login={organization.login}
      />
      {isOpen && (
        <div>
          <h4>MEMBERS</h4>
          {!publicMembers.length ? (
            <p>No members for this organization.</p>
          ) : (
            publicMembers.map(({ avatar_url, id, login }) => (
              <Info avatarUrl={avatar_url} id={id} login={login} key={id} />
            ))
          )}
        </div>
      )}
      <div className="InfoBadgeArrowIconContainer">
        <img
          src={ArrowIcon}
          alt="arrow"
          className={`InfoBadgeArrowIcon ${isOpen ? "open" : ""}`}
        />
      </div>
    </div>
  );
};
