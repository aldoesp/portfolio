import React from 'react';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';

const SocialButton = ({ icon: Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400 text-white transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-110"
    >
      <Icon size={20} strokeWidth={2.5} />
    </a>
  );
};

const SocialMediaBar = () => {
  return (
    <div className="flex gap-4 justify-center">
      <SocialButton icon={Facebook} link="https://facebook.com" />
      <SocialButton icon={Github} link="https://github.com" />
      <SocialButton icon={Mail} link="mailto:votre.email@gmail.com" /> {/* M de Gmail */}
      <SocialButton icon={Linkedin} link="https://linkedin.com" />
    </div>
  );
};

export default SocialMediaBar;