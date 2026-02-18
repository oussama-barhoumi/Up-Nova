import React, { useState } from 'react';
import { 
  MoreVertical, 
  Search, 
  MessageCircle, 
  Phone, 
  Video, 
  Check, 
  CheckCheck, 
  Clock,
  Filter,
  Settings,
  Moon,
  Sun
} from 'lucide-react';

const MessagesTemp = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const messagesData = [
    {
      id: 1,
      name: "Edein Vindin",
      avatar: "https://i.pravatar.cc/150?img=11",
      message: "haha, I meet u do u work...",
      time: "2m",
      unread: 3,
      online: true,
      status: "sent",
      type: "text"
    },
    {
      id: 2,
      name: "John Carter",
      avatar: "https://i.pravatar.cc/150?img=3",
      message: "See you tomorrow bro!",
      time: "15m",
      unread: 0,
      online: true,
      status: "read",
      type: "text"
    },
    {
      id: 3,
      name: "Sarah Smith",
      avatar: "https://i.pravatar.cc/150?img=5",
      message: "Send me the file please.",
      time: "1h",
      unread: 1,
      online: false,
      status: "delivered",
      type: "file"
    },
    {
      id: 4,
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=12",
      message: "Can you join the meeting late",
      time: "2h",
      unread: 0,
      online: true,
      status: "read",
      type: "meeting"
    },
    {
      id: 5,
      name: "Emma Williams",
      avatar: "https://i.pravatar.cc/150?img=9",
      message: "Got the tickets! See you there 🎉",
      time: "3h",
      unread: 0,
      online: false,
      status: "read",
      type: "event"
    },
    {
      id: 6,
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/150?img=13",
      message: "Let's grab lunch today.",
      time: "5h",
      unread: 0,
      online: true,
      status: "read",
      type: "text"
    },
    {
      id: 7,
      name: "Olivia Davis",
      avatar: "https://i.pravatar.cc/150?img=8",
      message: "Don't forget to send me the report...",
      time: "1d",
      unread: 2,
      online: false,
      status: "pending",
      type: "text"
    },
    {
      id: 8,
      name: "William Miller",
      avatar: "https://i.pravatar.cc/150?img=15",
      message: "Happy Birthday! 🎂",
      time: "2d",
      unread: 0,
      online: true,
      status: "read",
      type: "celebration"
    }
  ];

  const StatusIcon = ({ status }) => {
    switch(status) {
      case 'sent':
        return <Check className="w-3 h-3 text-gray-500" />;
      case 'delivered':
        return <CheckCheck className="w-3 h-3 text-gray-500" />;
      case 'read':
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      case 'pending':
        return <Clock className="w-3 h-3 text-yellow-500" />;
      default:
        return null;
    }
  };

  const filteredMessages = messagesData.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-md mx-auto min-h-screen relative overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className={`relative z-10 px-6 pt-12 pb-6 ${darkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-xl border-b ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30">
                  M
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Messages</h1>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>8 conversations</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="relative">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-slate-400' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-12 py-4 rounded-2xl outline-none transition-all ${
                darkMode 
                  ? 'bg-slate-800 text-white placeholder-slate-500 focus:bg-slate-750 border border-slate-700 focus:border-purple-500/50' 
                  : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
              }`}
            />
            <button className={`absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
              <Filter className={`w-4 h-4 ${darkMode ? 'text-slate-400' : 'text-gray-400'}`} />
            </button>
          </div>

          <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {['All', 'Unread', 'Groups', 'Calls'].map((filter, idx) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  idx === 0 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/30' 
                    : darkMode 
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={`relative z-10 px-4 py-4 space-y-2 ${darkMode ? 'bg-slate-950' : 'bg-gray-50'}`}>
          {filteredMessages.map((chat, index) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedChat === chat.id 
                  ? 'bg-gradient-to-r from-purple-500/20 to-blue-600/20 border border-purple-500/30' 
                  : darkMode 
                    ? 'hover:bg-slate-900 border border-transparent hover:border-slate-800' 
                    : 'hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg'
              }`}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={chat.avatar} 
                      alt={chat.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-transparent group-hover:ring-purple-500/50 transition-all"
                    />
                    {chat.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-950 rounded-full animate-pulse" />
                    )}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-semibold truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {chat.name}
                    </h3>
                    <span className={`text-xs font-medium ${darkMode ? 'text-slate-500' : 'text-gray-400'}`}>
                      {chat.time}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <p className={`text-sm truncate flex-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      {chat.message}
                    </p>
                    
                    {chat.unread > 0 ? (
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-purple-500/30">
                        {chat.unread}
                      </span>
                    ) : (
                      <span className="flex-shrink-0">
                        <StatusIcon status={chat.status} />
                      </span>
                    )}
                  </div>
                </div>

                <div className={`absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl shadow-xl p-2 flex gap-1`}>
                  <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-700 text-slate-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}>
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-700 text-slate-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}>
                    <Video className="w-4 h-4" />
                  </button>
                  <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-700 text-slate-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}>
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {selectedChat === chat.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-600 rounded-r-full" />
              )}
            </div>
          ))}
        </div>

        <div className={`fixed bottom-0 left-0 right-0 px-6 py-4 ${darkMode ? 'bg-slate-900/90' : 'bg-white/90'} backdrop-blur-xl border-t ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
          <div className="max-w-md mx-auto flex items-center justify-around">
            {[
              { icon: MessageCircle, label: 'Chats', active: true },
              { icon: Phone, label: 'Calls', active: false },
              { icon: Settings, label: 'Settings', active: false }
            ].map((item, idx) => (
              <button 
                key={idx}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                  item.active 
                    ? 'text-purple-500 scale-110' 
                    : darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesTemp;