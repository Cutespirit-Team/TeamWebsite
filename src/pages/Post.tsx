import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = () => {
  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-white transition-colors duration-100">
      <p className="text-white">
        <div className="text-center p-4 mb-4 text-xl text-red-800 rounded-lg bg-red-100 dark:bg-gray-900 dark:text-red-400" role="alert">
          <FontAwesomeIcon icon={['fas', 'triangle-exclamation']} className="pr-2"/>
           目前暫不開放
        </div>
      </p>
    </div>
  )
}

export default Post;
