import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 text-center text-slate-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-sm">
          <p>
            &copy; {currentYear} Nigam Niraula. All Rights Reserved.
          </p>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;