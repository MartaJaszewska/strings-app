import Image from "next/image";
import Link from "next/link";

export default function User({ user, href }: { user: UserI; href?: string }) {
  return (
    <div>
      <Link
        href={`/${href || user.username}`}
        className="flex flex-row items-center"
      >
        {user.avatar && (
          <Image
            src={user.avatar}
            alt={user.username}
            width={50}
            height={50}
            className="rounded-full mr-3"
          />
        )}
        {!user.avatar && (
          <div
            style={{ width: 50, height: 50 }}
            className="bg-slate-600 rounded-full mr-3"
          ></div>
        )}
        <div>{user.username}</div>
      </Link>
    </div>
  );
}
