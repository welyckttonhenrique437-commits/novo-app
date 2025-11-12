"use client";

import { useEffect, useState } from "react";
import { Flame, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Simular verificação de pagamento
    const userData = localStorage.getItem("casualmatch_user");
    
    if (!userData) {
      window.location.href = "/";
      return;
    }

    setUser(JSON.parse(userData));

    // Simular delay de verificação
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleContinue = () => {
    window.location.href = "/feed";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-red-950/20 to-black flex items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-red-500 mx-auto mb-4 animate-spin" />
          <h2 className="text-2xl font-bold mb-2">Verificando pagamento...</h2>
          <p className="text-gray-400">Aguarde enquanto confirmamos sua transação</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950/20 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-black/80 backdrop-blur-xl border border-red-900/30 rounded-2xl p-8 shadow-2xl text-center">
          <div className="flex items-center justify-center mb-6">
            <Flame className="w-12 h-12 text-red-500 mr-2" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              CasualMatch
            </h1>
          </div>

          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">
              Bem-vindo(a), {user?.name}! 🔥
            </h2>
            <p className="text-gray-300 text-lg mb-2">
              Seu pagamento foi confirmado com sucesso!
            </p>
            <p className="text-gray-400">
              Agora você tem acesso completo à CasualMatch — seu novo espaço para conexões sem limites.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-300">
              <strong className="text-red-400">Dica:</strong> Complete seu perfil com fotos e uma bio provocante para receber mais curtidas e mensagens! 😏
            </p>
          </div>

          <Button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
          >
            Explorar Agora
          </Button>

          <p className="text-gray-500 text-xs mt-4">
            Você receberá um e-mail de confirmação em breve
          </p>
        </div>
      </div>
    </div>
  );
}
