import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Prathamesh Naik. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-10">
            {/* GitHub */}
            <Link
              href="https://github.com/prathamesh493"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/prathameshnaik493"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>

            {/* LeetCode */}
            <Link
              href="https://leetcode.com/u/naikpr040903"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 11.1c.1-.1.3-.2.4-.3 1.7-1.8 3.5-3.5 5.2-5.3 1-1 1.9-1.9 2.9-2.9.2-.2.3-.3.5-.5.4-.3.8-.2 1 .2.2.3.2.6 0 .9-.1.2-.3.3-.4.5-1.4 1.4-2.7 2.8-4.1 4.2-1.3 1.3-2.6 2.6-3.9 3.9-.2.2-.3.4-.5.6 0 0-.1.1-.1.2.1.1.1.1.1.2.2.2.3.4.5.6 1.9 1.9 3.8 3.8 5.7 5.7 1.3 1.3 2.6 2.6 3.9 3.9.2.2.3.4.5.6.2.3.2.6 0 .9-.2.4-.6.5-1 .2-.1-.1-.3-.3-.4-.5-1.4-1.4-2.8-2.8-4.1-4.2-1.6-1.6-3.2-3.2-4.9-4.8-.3-.3-.6-.5-.9-.8-.2-.2-.3-.3-.5-.5zm14.7.3c-.1 0-.3 0-.4-.1-2.1 0-4.2 0-6.4 0-.2 0-.3 0-.5 0-.3-.1-.5-.3-.6-.6 0-.3.1-.6.4-.8.2-.1.4-.1.7-.1h3.8c.9 0 1.9 0 2.8 0 .5 0 .8.2.9.7.1.3-.1.7-.5.8h-.2zM18.6 12.7c.3 0 .6 0 .8.2.3.2.4.5.3.9-.1.4-.4.6-.8.6H14c-.3 0-.5 0-.7-.2-.2-.2-.3-.4-.3-.7 0-.5.3-.8.8-.8h5zM14.5 16.1h3.3c.5 0 .8.3.9.7 0 .3 0 .6-.3.8-.2.2-.5.3-.8.3h-3.3c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1 1.1-1z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

