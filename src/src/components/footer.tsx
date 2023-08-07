import { FooterLink } from "../constants/types";

interface FooterProps {
    footerlinks: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer aria-label="Site Footer">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-green-500 sm:justify-start">
              <h1 className='font-bold '>Cliff.dev</h1>
            </div>
      
            <p className="mt-4 text-center text-sm text-green-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;