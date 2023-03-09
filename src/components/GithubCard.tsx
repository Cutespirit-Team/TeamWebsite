import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
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

const Card = (props: CardProps) => {
  return (
    <div>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {/* title */}
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-cyan-300 dark:text-white">{props.name}</h5>
        {/* description */}
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">{props.description}</p>

        <hr />
        <div className="flex items-center">
          {/* star */}
          <FontAwesomeIcon icon={['fas', 'star']} className="text-black dark:text-white pr-2" />
          <p className="text-gray-700 dark:text-gray-400 pr-5">{props.stargazers_count}</p>

          {/* fork */}
          <FontAwesomeIcon icon={['fas', 'code-fork']} className="text-black dark:text-white pr-2" />
          <p className="text-gray-700 dark:text-gray-400 pr-5">{props.forks_count}</p>

          {/* watch */}
          <FontAwesomeIcon icon={['fas', 'eye']} className="text-black dark:text-white pr-2" />
          <p className="text-gray-700 dark:text-gray-400 pr-5">{props.watchers}</p>

          {/* issue */}
          <FontAwesomeIcon icon={['fas', 'question']} className="text-black dark:text-white pr-2" />
          <p className="text-gray-700 dark:text-gray-400 pr-5">{props.open_issues}</p>

        </div>
        {/* language */}
        {
          props.language === null ? "" : (
            <p className="text-gray-700 dark:text-gray-400 pr-5">使用語言：{props.language}</p>
          )
        }

        {/* button */}
        <div className="flex pt-4">
          <a className="text-gray-700 dark:text-gray-400" href={props.html_url}>
            <button type="button" className="text-white bg-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-100 dark:focus:ring-gray-700 dark:border-gray-700">Github</button>
          </a> <br />
          {
            props.homepage === null ? "" : (
              <a className="text-gray-700 dark:text-gray-400" href={props.homepage}>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Website</button>
              </a>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Card;
