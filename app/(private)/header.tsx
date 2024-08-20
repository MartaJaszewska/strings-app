import useSWR from "swr";
// import fetcher from "../util/fetcher";
import User from "../components/user";

export default function Header() {
  const { data, error, isLoading } = useSWR("/api/users/profile");
  // const { data, error, isLoading } = useSWR("/api/users/profile", fetcher);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <header className="flex flex-row w-fill p-5 bg-slate-800 rounded-1g my-2 justify-between items-center">
      <div>
        <h1 className="font-mono text-lg">Strings App</h1>
      </div>
      <div>
        <User user={data.data} href="account" />
      </div>
    </header>
  );
}
