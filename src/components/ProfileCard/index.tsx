import { useAPI } from "@/hooks/useAPI";
import {
  ArrowUpRight,
  Building2,
  GitBranch,
  Github,
  Users2,
} from "lucide-react";
import { memo } from "react";
import { ProfileCardSkeleton } from "../Skeleton";

interface User {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  company: string;
  followers: number;
  public_repos: number;
}

function ProfileCardComponent() {
  const {
    data: userData,
    isLoading,
    error,
  } = useAPI<User>("/users/pdro-lucas");

  if (error) {
    return (
      <div className="flex gap-8 p-8 -mt-16 rounded-xl bg-base-profile">
        <p>{error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex gap-8 p-8 -mt-16 rounded-xl bg-base-profile">
        <ProfileCardSkeleton />
      </div>
    );
  }

  return (
    <>
      {userData && (
        <div className="flex gap-8 p-8 -mt-16 rounded-xl bg-base-profile">
          <img
            src={userData.avatar_url}
            alt={userData.name}
            className="rounded-lg w-36 h-36"
            loading="lazy"
          />

          <div className="flex-1 text-base-text">
            <header className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-base-title">
                {userData.name}
              </h1>
              <a
                href={userData.html_url}
                className="flex items-center gap-2 text-xs font-bold uppercase text-blue"
              >
                Github
                <ArrowUpRight size={16} />
              </a>
            </header>
            <p className="mb-6">{userData.bio}</p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Github size={16} />
                <span>{userData.login}</span>
              </div>

              {userData.company && (
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  <span>{userData.company}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Users2 size={16} />
                <span>{userData.followers} followers</span>
              </div>

              <div className="flex items-center gap-2 ">
                <GitBranch size={16} />
                <span>{userData.public_repos} repositories</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const ProfileCard = memo(ProfileCardComponent);
