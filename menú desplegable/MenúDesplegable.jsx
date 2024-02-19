import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5';

export default function ButtonMenu() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <IoMenuOutline
        onClick={toggleMenu}
        className='text-3xl cursor-pointer hover:scale-105'
      />
      <div
        ref={menuRef}
        className={`menu ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0  left-0 h-full pt-10 w-[400px] bg-white font-semibold p-4 transition-transform duration-300 ease-in-out`}
      >
        <div>
          <h4>Ingresá a tu cuenta y Encuantra lo que buscas</h4>
          <div className='flex gap-4 mt-8  '>
            <div>
              <button className='border  rounded-lg border-Primary hover:bg-blue-200 font-semibold py-1 text-Primary px-10'>
                Crear Cuenta
              </button>
            </div>
            <div>
              <Link to={"/Login"}>
                <button className='border rounded-lg bg-Primary py-1 px-14 hover:bg-blue-500 font-semibold text-white'>
                  Ingresar
                </button>
              </Link>
            </div>
          </div>
          <div className='border-b border-gray-400 mt-8'></div>
        </div>
      </div>
    </div>
  );
}
