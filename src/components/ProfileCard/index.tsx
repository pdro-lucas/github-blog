import { api } from "@/lib/api";
import {
  Github,
  Building2,
  Users2,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import { useEffect, useState, memo } from "react";
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
  const [userData, setUserData] = useState({} as User);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/users/pdro-lucas")
      .then((response) => {
        setUserData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <div>Erro ao carregar os dados</div>;
  }

  return (
    <div className="flex gap-8 p-8 -mt-16 border rounded-xl bg-base-profile border-base-border">
      {isLoading ? (
        <ProfileCardSkeleton />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export const ProfileCard = memo(ProfileCardComponent);
