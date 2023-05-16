

//kod2
import React, { useState } from 'react';

function NewTalep() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Talep gönderme işlemleri burada gerçekleştirilebilir
    console.log(`Konu Başlığı: ${title}`);
    console.log(`Metin: ${content}`);
    setIsOpen(false);
  }

  return (
    <div className="container mx-auto mt-5">
      <div className=" relative" >
        <button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setIsOpen(true)}>
          Talep Oluştur
        </button>

        {isOpen && (
          <div className="left-312 ">
            
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96">
              <form onSubmit={handleSubmit}>
                <div className="mt-6 mb-6">
                  
                  
                  
                  <label  className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" htmlFor="title">
                    Konu Başlığı
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" type="text" placeholder="Konu Başlığı" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-6">
                  <label className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" htmlFor="content">
                    Metin
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="content" placeholder="Metin" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Gönder
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setIsOpen(false)}>
                    İptal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewTalep;
