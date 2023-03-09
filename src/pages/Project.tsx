import { useEffect, useState } from 'react';
import Card from '../components/GithubCard';
import LoadingCard from '../components/LoadingCard';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  watchers: number;
  open_issues: number;
  language: string;
}

const searchData = (e: any) => {
  console.log(e.target.value);
}

const Project = () => {
  const [repoData, setRepoData] = useState<Repo[]>([]);
  const [search, setSearch] = useState('');
  const [err_msg, setErr_msg] = useState('');

  const getData = () => {
    try {
      fetch('https://api.github.com/users/Cutespirit-Team/repos')
        .then((response) => response.json())
        .then((data) => {
          // 排除掉 .github
          setRepoData(data.slice(1));
          }
        )
        .catch((error) => {
          setErr_msg(error);
        }
      );
    } catch (error: any) {
      setErr_msg(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container mx-auto pt-8 pl-5 pr-5 text-white transition-colors duration-100'>
      {
        repoData.length === 0 ? (
          <LoadingCard err_msg={err_msg} reload={ () => getData() }></LoadingCard>
        ) : ""
      }
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          repoData.map((repo, index) => {
            return (
              <Card
                key={index}
                name={repo.name}
                description={repo.description}
                html_url={repo.html_url}
                homepage={repo.homepage}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
                watchers={repo.watchers}
                open_issues={repo.open_issues}
                language={repo.language}
              ></Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project;
