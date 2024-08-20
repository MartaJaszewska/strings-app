import useSWR from "swr";
// import fetcher from "../util/fetcher";

export default function Header() {
  const { data, error, isLoading } = useSWR("/api/users/profile");
  // const { data, error, isLoading } = useSWR("/api/users/profile", fetcher);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return <header>{data.data.username}</header>;
}
