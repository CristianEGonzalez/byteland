import { useState } from 'react';
import Button from './Button';
import ContactModal from './ContactModal';

const ContactButton = ({ nombre = "Contactar", className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Button genérico */}
      <Button 
        nombre={nombre} 
        onClick={() => setIsModalOpen(true)} 
        className={className}
      />

      {/* Utilizamos el Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ContactButton;