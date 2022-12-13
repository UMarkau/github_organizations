import "./Info.scss";

interface IProps {
  avatarUrl: string;
  login: string;
  id: number;
  nodeId?: string;
}

export const Info = ({ avatarUrl, login, id, nodeId }: IProps) => {
  return (
    <div className={`InfoContent ${nodeId ? "" : "Member"}`}>
      <img src={avatarUrl} alt="avatar" className="InfoImage" />
      <div className="InfoMeta">
        <h4>{login}</h4>
        <p>{id}</p>
        {nodeId && <p>{nodeId}</p>}
      </div>
    </div>
  );
};
