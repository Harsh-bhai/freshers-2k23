import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const SocialMediaIntegrations = () => {
  const whatsappGroupLink = 'https://chat.whatsapp.com/your-group-link';
  const instagramProfile = 'https://www.instagram.com/your-profile/';

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Social Media Integration</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Join our WhatsApp Group</h2>
          <a
            href={whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline"
          >
            <FaWhatsapp className="mr-2" />
            Click here to join
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Follow us on Instagram</h2>
          <a
            href={instagramProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline"
          >
            <FaInstagram className="mr-2" />
            Click here to follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIntegrations;
