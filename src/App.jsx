import React, { useState } from 'react';
import { Sparkles, Settings, LogOut } from 'lucide-react';

const TableLotteryApp = () => {
  const [lang, setLang] = useState('pt');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [selectedGuest, setSelectedGuest] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [finalTable, setFinalTable] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [usedGuests, setUsedGuests] = useState([]);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  
  // Admin state
  const [guests, setGuests] = useState([
    { nick: 'Ana Silva', table: 1 },
    { nick: 'Bruno Costa', table: 2 },
    { nick: 'Carla Mendes', table: 3 },
    { nick: 'David Santos', table: 4 },
    { nick: 'Elena Rodrigues', table: 1 },
    { nick: 'Fernando Alves', table: 2 },
    { nick: 'Gabriela Lima', table: 3 },
    { nick: 'Hugo Pereira', table: 4 },
    { nick: 'Inês Martins', table: 1 },
    { nick: 'João Ferreira', table: 2 },
    { nick: 'Karina Sousa', table: 3 },
    { nick: 'Lucas Oliveira', table: 4 },
    { nick: 'Mariana Rocha', table: 1 },
    { nick: 'Nuno Cardoso', table: 2 },
    { nick: 'Olivia Barros', table: 3 },
    { nick: 'Pedro Gomes', table: 4 },
    { nick: 'Quirina Dias', table: 1 },
    { nick: 'Rafael Pinto', table: 2 },
    { nick: 'Sofia Teixeira', table: 3 },
    { nick: 'Tiago Lopes', table: 4 },
    { nick: 'Ursula Moreira', table: 1 },
    { nick: 'Vasco Cunha', table: 2 },
    { nick: 'Wanda Freitas', table: 3 },
    { nick: 'Xavier Ramos', table: 4 },
    { nick: 'Yara Nunes', table: 1 },
    { nick: 'Zé Carlos', table: 2 },
    { nick: 'Amanda Torres', table: 3 },
    { nick: 'Bernardo Cruz', table: 4 },
    { nick: 'Cecília Faria', table: 1 },
    { nick: 'Diogo Correia', table: 2 },
    { nick: 'Eduarda Reis', table: 3 },
    { nick: 'Fábio Monteiro', table: 4 },
    { nick: 'Gisela Castro', table: 1 },
    { nick: 'Henrique Borges', table: 2 },
    { nick: 'Iolanda Simões', table: 3 },
    { nick: 'Jorge Marques', table: 4 },
    { nick: 'Kelly Azevedo', table: 1 },
    { nick: 'Leonardo Vieira', table: 2 },
    { nick: 'Marta Coelho', table: 3 },
    { nick: 'Nelson Duarte', table: 4 },
    { nick: 'Odete Fonseca', table: 1 },
    { nick: 'Paulo Ribeiro', table: 2 },
    { nick: 'Quitéria Batista', table: 3 },
    { nick: 'Roberto Moura', table: 4 },
    { nick: 'Sandra Barbosa', table: 1 },
    { nick: 'Tomás Antunes', table: 2 },
    { nick: 'Úrsula Campos', table: 3 },
    { nick: 'Vítor Machado', table: 4 },
    { nick: 'Wilma Fernandes', table: 1 },
    { nick: 'Ximena Aragão', table: 2 },
    { nick: 'Yuri Pacheco', table: 3 },
    { nick: 'Zuleica Tavares', table: 4 },
    { nick: 'Alberto Sampaio', table: 1 },
    { nick: 'Beatriz Melo', table: 2 },
    { nick: 'César Navarro', table: 3 },
    { nick: 'Daniela Sá', table: 4 },
    { nick: 'Eduardo Lemos', table: 1 },
    { nick: 'Fabiana Braga', table: 2 },
    { nick: 'Gustavo Pires', table: 3 },
    { nick: 'Helena Vaz', table: 4 }
  ]);
  
  const [editingGuest, setEditingGuest] = useState({ nick: '', table: 1 });
  const [editIndex, setEditIndex] = useState(null);

  const translations = {
    pt: {
      title: 'Sorteio de Mesas',
      chooseName: 'Escolha o seu nick...',
      drawButton: 'Sortear Mesa',
      yourTable: 'A sua mesa é',
      alreadyDrawn: 'Já realizou o sorteio',
      adminPanel: 'Painel Admin',
      guestList: 'Lista de Convidados',
      nick: 'Nick',
      tableNumber: 'Mesa',
      actions: 'Ações',
      edit: 'Editar',
      delete: 'Eliminar',
      addGuest: 'Adicionar Convidado',
      save: 'Guardar',
      cancel: 'Cancelar',
      logout: 'Sair',
      password: 'Palavra-passe',
      login: 'Entrar',
      adminArea: 'Área Admin'
    },
    es: {
      title: 'Sorteo de Mesas',
      chooseName: 'Elige tu nick...',
      drawButton: 'Sortear Mesa',
      yourTable: 'Tu mesa es',
      alreadyDrawn: 'Ya realizaste el sorteo',
      adminPanel: 'Panel Admin',
      guestList: 'Lista de Invitados',
      nick: 'Nick',
      tableNumber: 'Mesa',
      actions: 'Acciones',
      edit: 'Editar',
      delete: 'Eliminar',
      addGuest: 'Añadir Invitado',
      save: 'Guardar',
      cancel: 'Cancelar',
      logout: 'Salir',
      password: 'Contraseña',
      login: 'Entrar',
      adminArea: 'Área Admin'
    },
    en: {
      title: 'Table Draw',
      chooseName: 'Choose your nick...',
      drawButton: 'Draw Table',
      yourTable: 'Your table is',
      alreadyDrawn: 'Already drawn',
      adminPanel: 'Admin Panel',
      guestList: 'Guest List',
      nick: 'Nick',
      tableNumber: 'Table',
      actions: 'Actions',
      edit: 'Edit',
      delete: 'Delete',
      addGuest: 'Add Guest',
      save: 'Save',
      cancel: 'Cancel',
      logout: 'Logout',
      password: 'Password',
      login: 'Login',
      adminArea: 'Admin Area'
    }
  };

  const t = translations[lang];

  const handleDraw = () => {
    if (!selectedGuest || usedGuests.includes(selectedGuest)) return;
    
    const guest = guests.find(g => g.nick === selectedGuest);
    if (!guest) return;

    setIsSpinning(true);
    setFinalTable(null);
    setShowConfetti(false);
    
    let counter = 0;
    const spinInterval = setInterval(() => {
      setCurrentNumber(Math.floor(Math.random() * 4) + 1);
      counter++;
      
      if (counter > 30) {
        clearInterval(spinInterval);
        setCurrentNumber(guest.table);
        setTimeout(() => {
          setIsSpinning(false);
          setFinalTable(guest.table);
          setShowConfetti(true);
          setUsedGuests([...usedGuests, selectedGuest]);
          
          setTimeout(() => setShowConfetti(false), 5000);
        }, 500);
      }
    }, 100);
  };

  const handleAdminLogin = () => {
    if (adminPassword === 'WSDinnerParty') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      alert('Senha incorreta');
    }
  };

  const addGuest = () => {
    if (editingGuest.nick.trim()) {
      if (editIndex !== null) {
        const newGuests = [...guests];
        newGuests[editIndex] = editingGuest;
        setGuests(newGuests);
        setEditIndex(null);
      } else {
        setGuests([...guests, editingGuest]);
      }
      setEditingGuest({ nick: '', table: 1 });
    }
  };

  const deleteGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditingGuest(guests[index]);
    setEditIndex(index);
  };

  const cancelEdit = () => {
    setEditingGuest({ nick: '', table: 1 });
    setEditIndex(null);
  };

  // Confetti effect
  const Confetti = () => {
    const pieces = Array.from({ length: 80 });
    const colors = ['#d4a853', '#c49647', '#e0b860', '#c08a3f', '#ddb76e'];
    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {pieces.map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              opacity: 0.8 + Math.random() * 0.2
            }}
          />
        ))}
      </div>
    );
  };

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&display=swap');
          
          .gradient-border {
            background: linear-gradient(135deg, #d4a853, #c49647, #d4a853);
            background-size: 200% auto;
            padding: 2px;
            border-radius: 12px;
          }
          .gradient-border-inner {
            background: #000;
            border-radius: 10px;
            padding: 1.5rem;
          }
        `}</style>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold" style={{ color: '#d4a853' }}>
              {t.adminPanel}
            </h1>
            <button
              onClick={() => setIsAdmin(false)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
            >
              <LogOut size={20} />
              {t.logout}
            </button>
          </div>

          <div className="gradient-border mb-6">
            <div className="gradient-border-inner">
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#d4a853' }}>{t.addGuest}</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={editingGuest.nick}
                  onChange={(e) => setEditingGuest({ ...editingGuest, nick: e.target.value })}
                  placeholder={t.nick}
                  className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2"
                  style={{ borderColor: '#d4a853', border: '1px solid' }}
                />
                <select
                  value={editingGuest.table}
                  onChange={(e) => setEditingGuest({ ...editingGuest, table: parseInt(e.target.value) })}
                  className="bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2"
                  style={{ borderColor: '#d4a853', border: '1px solid' }}
                >
                  <option value={1}>Mesa 1</option>
                  <option value={2}>Mesa 2</option>
                  <option value={3}>Mesa 3</option>
                  <option value={4}>Mesa 4</option>
                </select>
                <button
                  onClick={addGuest}
                  className="px-6 py-2 rounded-lg font-semibold transition"
                  style={{ background: 'linear-gradient(to right, #d4a853, #c49647)', color: '#000' }}
                >
                  {editIndex !== null ? t.save : t.addGuest}
                </button>
                {editIndex !== null && (
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition"
                  >
                    {t.cancel}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="gradient-border">
            <div className="gradient-border-inner">
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#d4a853' }}>{t.guestList}</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: '1px solid #d4a853' }}>
                      <th className="text-left py-3 px-4">{t.nick}</th>
                      <th className="text-left py-3 px-4">{t.tableNumber}</th>
                      <th className="text-left py-3 px-4">{t.actions}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map((guest, index) => (
                      <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                        <td className="py-3 px-4">{guest.nick}</td>
                        <td className="py-3 px-4">Mesa {guest.table}</td>
                        <td className="py-3 px-4">
                          <button
                            onClick={() => startEdit(index)}
                            className="mr-4"
                            style={{ color: '#d4a853' }}
                          >
                            {t.edit}
                          </button>
                          <button
                            onClick={() => deleteGuest(index)}
                            className="text-red-500 hover:text-red-400"
                          >
                            {t.delete}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden" style={{ fontFamily: "'Playfair Display', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&display=swap');
        
        @keyframes spin-roulette {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.15) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(212, 168, 83, 0.3),
                        0 0 40px rgba(212, 168, 83, 0.2),
                        0 0 60px rgba(212, 168, 83, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(212, 168, 83, 0.5),
                        0 0 60px rgba(212, 168, 83, 0.3),
                        0 0 90px rgba(212, 168, 83, 0.2);
          }
        }
        
        .bg-pattern {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(212, 168, 83, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(212, 168, 83, 0.05) 0%, transparent 50%);
        }
        
        .confetti {
          position: absolute;
          width: 12px;
          height: 12px;
          animation: confetti-fall 3s linear forwards;
          border-radius: 2px;
        }
        
        .roulette-number {
          font-size: 9rem;
          font-weight: 900;
          background: linear-gradient(135deg, #d4a853 0%, #c49647 50%, #d4a853 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: spin-roulette 0.1s ease-in-out, shimmer 2s linear infinite;
          text-shadow: 0 0 40px rgba(212, 168, 83, 0.5);
          filter: drop-shadow(0 0 20px rgba(212, 168, 83, 0.6));
          letter-spacing: 0.1em;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #d4a853 0%, #c49647 50%, #d4a853 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        
        .gradient-border {
          background: linear-gradient(135deg, #d4a853, #c49647, #d4a853);
          background-size: 200% auto;
          padding: 3px;
          border-radius: 20px;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .gradient-border-inner {
          background: linear-gradient(145deg, #0a0a0a, #000000);
          border-radius: 17px;
          backdrop-filter: blur(10px);
        }

        .lang-btn {
          width: 50px;
          height: 38px;
          border-radius: 8px;
          border: 2px solid rgba(212, 168, 83, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
          color: #999;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
          user-select: none;
        }

        .lang-btn:hover {
          border-color: #d4a853;
          transform: scale(1.05);
          background: rgba(212, 168, 83, 0.1);
        }

        .lang-btn.active {
          border-color: #d4a853;
          box-shadow: 0 0 15px rgba(212, 168, 83, 0.5);
          background: rgba(212, 168, 83, 0.2);
          color: #d4a853;
        }
        
        .elegant-select {
          background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
          border: 2px solid rgba(212, 168, 83, 0.3);
          transition: all 0.3s ease;
          color: #ffffff;
        }
        
        .elegant-select option {
          background: #1a1a1a;
          color: #ffffff;
          padding: 8px;
        }
        
        .elegant-select option:disabled {
          color: #666666;
        }
        
        .elegant-select:focus {
          border-color: #d4a853;
          box-shadow: 0 0 20px rgba(212, 168, 83, 0.3),
                      inset 0 0 20px rgba(212, 168, 83, 0.1);
        }
        
        .elegant-select:hover {
          border-color: rgba(212, 168, 83, 0.5);
        }
        
        .sparkle-icon {
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(212, 168, 83, 0.8));
        }
      `}</style>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50"></div>

      {showConfetti && <Confetti />}

      <div className="w-full max-w-md relative z-10">
        {/* Language and Admin buttons */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3">
            <div
              className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
              onClick={() => setLang('pt')}
              title="Português"
            >
              PT
            </div>
            <div
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
              title="Español"
            >
              ES
            </div>
            <div
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              title="English"
            >
              EN
            </div>
          </div>
          
          <div
            onClick={() => setShowAdminLogin(!showAdminLogin)}
            className="cursor-pointer transition"
            style={{ color: '#d4a853' }}
          >
            <Settings size={26} />
          </div>
        </div>

        {/* Admin Login */}
        {showAdminLogin && (
          <div className="gradient-border mb-6">
            <div className="gradient-border-inner p-4">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#d4a853' }}>{t.adminArea}</h3>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  placeholder={t.password}
                  className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2"
                  style={{ borderColor: '#d4a853', border: '1px solid' }}
                />
                <button
                  onClick={handleAdminLogin}
                  className="px-4 py-2 rounded-lg font-semibold transition"
                  style={{ background: 'linear-gradient(to right, #d4a853, #c49647)', color: '#000' }}
                >
                  {t.login}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Card */}
        <div className="gradient-border">
          <div className="gradient-border-inner p-10 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="flex justify-center mb-6">
                <Sparkles className="sparkle-icon" style={{ color: '#d4a853' }} size={56} strokeWidth={2} />
              </div>
              <h1 className="text-5xl md:text-6xl font-black gradient-text mb-6 tracking-tight">
                {t.title}
              </h1>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mb-4 rounded-full"></div>
            </div>

            {/* Roulette Display */}
            {(isSpinning || finalTable) && (
              <div className="text-center mb-10 py-12">
                {isSpinning ? (
                  <div className="roulette-number">{currentNumber}</div>
                ) : (
                  <div className="space-y-6 animate-fade-in">
                    <p className="text-3xl font-light text-gray-300 tracking-wide">{t.yourTable}</p>
                    <div className="relative">
                      <div className="absolute inset-0 blur-3xl opacity-50">
                        <div className="roulette-number">{finalTable}</div>
                      </div>
                      <div className="roulette-number relative">{finalTable}</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Guest Selection */}
            {!finalTable && (
              <>
                <div className="mb-8">
                  <select
                    value={selectedGuest}
                    onChange={(e) => setSelectedGuest(e.target.value)}
                    disabled={isSpinning}
                    className="w-full elegant-select rounded-xl px-6 py-4 text-white text-lg font-light focus:outline-none disabled:opacity-50 cursor-pointer"
                  >
                    <option value="">{t.chooseName}</option>
                    {[...guests].sort((a, b) => a.nick.localeCompare(b.nick)).map((guest, index) => (
                      <option 
                        key={index} 
                        value={guest.nick}
                        disabled={usedGuests.includes(guest.nick)}
                      >
                        {guest.nick} {usedGuests.includes(guest.nick) ? `(${t.alreadyDrawn})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleDraw}
                  disabled={!selectedGuest || isSpinning || usedGuests.includes(selectedGuest)}
                  className="w-full rounded-xl py-5 px-8 text-xl tracking-wide transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed uppercase font-bold"
                  style={{ 
                    background: (!selectedGuest || isSpinning || usedGuests.includes(selectedGuest)) 
                      ? '#4a4a4a' 
                      : 'linear-gradient(135deg, #d4a853 0%, #c49647 50%, #d4a853 100%)',
                    color: (!selectedGuest || isSpinning || usedGuests.includes(selectedGuest)) ? '#888888' : '#000000',
                    border: '2px solid ' + ((!selectedGuest || isSpinning || usedGuests.includes(selectedGuest)) ? '#3a3a3a' : '#d4a853'),
                    boxShadow: (!selectedGuest || isSpinning || usedGuests.includes(selectedGuest)) 
                      ? 'none' 
                      : '0 10px 40px rgba(212, 168, 83, 0.4)'
                  }}
                >
                  {isSpinning ? '🎰' : t.drawButton}
                </button>
              </>
            )}

            {finalTable && (
              <button
                onClick={() => {
                  setFinalTable(null);
                  setSelectedGuest('');
                }}
                className="w-full rounded-xl py-5 px-8 text-xl tracking-wide transition-all duration-300 transform hover:scale-[1.02] uppercase font-bold"
                style={{ 
                  background: 'linear-gradient(135deg, #d4a853 0%, #c49647 50%, #d4a853 100%)',
                  color: '#000000',
                  border: '2px solid #d4a853',
                  boxShadow: '0 10px 40px rgba(212, 168, 83, 0.4)'
                }}
              >
                ✨ OK ✨
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLotteryApp;
