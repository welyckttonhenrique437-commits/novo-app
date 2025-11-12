"use client";

import { useState, useEffect } from "react";
import { 
  Flame, 
  Home, 
  Search, 
  MessageCircle, 
  User, 
  Heart, 
  Send,
  Image as ImageIcon,
  Video,
  MoreHorizontal,
  MapPin,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Post {
  id: string;
  author: string;
  location: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
  liked?: boolean;
}

export default function FeedPage() {
  const [user, setUser] = useState<any>(null);
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: "Ana Silva",
      location: "São Paulo, SP",
      content: "Procurando conexões reais e intensas na zona sul. Sem enrolação, só prazer. 🔥",
      likes: 47,
      comments: 12,
      timestamp: "há 2 horas",
      liked: false,
    },
    {
      id: "2",
      author: "Carlos Mendes",
      location: "Rio de Janeiro, RJ",
      content: "Alguém da Barra pra encontrar hoje à noite? Curto conversar antes, mas sem perder tempo. 😏",
      likes: 23,
      comments: 8,
      timestamp: "há 4 horas",
      liked: false,
    },
    {
      id: "3",
      author: "Juliana Costa",
      location: "Belo Horizonte, MG",
      content: "Casal liberal procurando terceiro(a) para diversão. Discrição total garantida. 💋",
      likes: 89,
      comments: 34,
      timestamp: "há 6 horas",
      liked: true,
    },
  ]);

  useEffect(() => {
    // Verificar se usuário está logado
    const userData = localStorage.getItem("casualmatch_user");
    if (!userData) {
      window.location.href = "/";
      return;
    }
    setUser(JSON.parse(userData));
  }, []);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleNewPost = () => {
    if (!newPost.trim()) return;

    const post: Post = {
      id: Date.now().toString(),
      author: user?.name || "Usuário",
      location: `${user?.city}, ${user?.state}`,
      content: newPost,
      likes: 0,
      comments: 0,
      timestamp: "agora",
      liked: false,
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  const handleLogout = () => {
    localStorage.removeItem("casualmatch_user");
    window.location.href = "/";
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Flame className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-400">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950/10 to-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-red-900/20 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Flame className="w-7 h-7 text-red-500 mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              CasualMatch
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 hidden sm:block">
              Olá, <span className="text-white font-semibold">{user.name}</span>
            </span>
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="pt-20 pb-20">
        <div className="container mx-auto max-w-2xl px-4">
          {/* New Post */}
          <Card className="bg-black/40 backdrop-blur-sm border-red-900/30 mb-6">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Avatar className="w-10 h-10 border-2 border-red-500/30">
                  <AvatarFallback className="bg-red-500/20 text-red-400">
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="O que você está procurando hoje? 🔥"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="bg-black/50 border-red-900/30 text-white placeholder:text-gray-500 resize-none min-h-[80px] focus:border-red-500"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-red-400"
                      >
                        <ImageIcon className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-red-400"
                      >
                        <Video className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button
                      onClick={handleNewPost}
                      disabled={!newPost.trim()}
                      className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Publicar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="bg-black/40 backdrop-blur-sm border-red-900/30 hover:border-red-500/30 transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-12 h-12 border-2 border-red-500/30">
                      <AvatarFallback className="bg-red-500/20 text-red-400">
                        {post.author.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-white">{post.author}</h3>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <MapPin className="w-3 h-3" />
                            <span>{post.location}</span>
                            <span>•</span>
                            <span>{post.timestamp}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-gray-200 mb-4 leading-relaxed">{post.content}</p>
                      <div className="flex items-center gap-6">
                        <button
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Heart
                            className={`w-5 h-5 ${post.liked ? "fill-red-500 text-red-500" : ""}`}
                          />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-black/80 backdrop-blur-xl border-t border-red-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-red-500">
              <Home className="w-5 h-5" />
              <span className="text-xs">Início</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
              <Search className="w-5 h-5" />
              <span className="text-xs">Buscar</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs">Mensagens</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
              <User className="w-5 h-5" />
              <span className="text-xs">Perfil</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
