export default function DashboardLayout({
  children,
  notifications,
  revenue,
  users,
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex felx-1">{notifications}</div>
      </div>
    </div>
  );
}
