import "./ResumeHeader.scss";

function ResumeHeader({ user }) {
  return (
    <div className="resume__top">
      <h1 className="resume__top__name">{user.displayName}</h1>
      <p className="resume__top__position">Job title</p>
    </div>
  );
}

export default ResumeHeader;
