export default function Navbar() {
  return (
    <navbar className="w-full relative h-full flex-center py-[27px] ml-5">
      <ul className="relative flex-center gap-12 py-[2px]">
        <li>Home</li>
        <li>Dashboard</li>
        <li>Reports</li>
        <li>History</li>
        <li className="gradient-text font-bold">Create Event</li>
      </ul>
    </navbar>
  );
}
