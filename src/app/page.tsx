"use client";

import { useState } from "react";
import { Flame, Heart, Lock, Users, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    birthdate: "",
    over18: false,
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.over18) {
      alert("Você precisa confirmar que tem mais de 18 anos.");
      return;
    }

    // Salvar dados do usuário (em produção, enviar para API)
    localStorage.setItem("casualmatch_user", JSON.stringify(formData));
    
    // Redirecionar para checkout Kiwify
    window.location.href = "https://pay.kiwify.com.br/BZSQnpu";
  };

  const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  if (showSignup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-red-950/20 to-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-black/80 backdrop-blur-xl border border-red-900/30 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Flame className="w-10 h-10 text-red-500 mr-2" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                CasualMatch
              </h1>
            </div>

            <h2 className="text-xl font-semibold text-center mb-2">
              Crie sua conta
            </h2>
            <p className="text-gray-400 text-center text-sm mb-6">
              Preencha seus dados e libere o acesso completo
            </p>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/50 border-red-900/30 text-white focus:border-red-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border-red-900/30 text-white focus:border-red-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-300">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-black/50 border-red-900/30 text-white focus:border-red-500"
                  placeholder="Mínimo 6 caracteres"
                  minLength={6}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="text-gray-300">Cidade</Label>
                  <Input
                    id="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="bg-black/50 border-red-900/30 text-white focus:border-red-500"
                    placeholder="Sua cidade"
                  />
                </div>

                <div>
                  <Label htmlFor="state" className="text-gray-300">Estado</Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => setFormData({ ...formData, state: value })}
                  >
                    <SelectTrigger className="bg-black/50 border-red-900/30 text-white focus:border-red-500">
                      <SelectValue placeholder="UF" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-red-900/30">
                      {estados.map((estado) => (
                        <SelectItem key={estado} value={estado} className="text-white hover:bg-red-900/20">
                          {estado}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="birthdate" className="text-gray-300">Data de Nascimento</Label>
                <Input
                  id="birthdate"
                  type="date"
                  required
                  value={formData.birthdate}
                  onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                  className="bg-black/50 border-red-900/30 text-white focus:border-red-500"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="over18"
                  checked={formData.over18}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, over18: checked as boolean })
                  }
                  className="border-red-900/30 data-[state=checked]:bg-red-500"
                />
                <Label htmlFor="over18" className="text-sm text-gray-300 leading-tight cursor-pointer">
                  Confirmo que tenho mais de 18 anos e aceito os{" "}
                  <Link href="/terms" className="text-red-400 hover:text-red-300 underline">
                    Termos de Uso
                  </Link>
                  {" "}e a{" "}
                  <Link href="/privacy" className="text-red-400 hover:text-red-300 underline">
                    Política de Privacidade
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
              >
                Continuar para Pagamento (R$ 19,90)
              </Button>

              <button
                type="button"
                onClick={() => setShowSignup(false)}
                className="w-full text-gray-400 hover:text-white text-sm mt-2"
              >
                Voltar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950/20 to-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-lg border-b border-red-900/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Flame className="w-8 h-8 text-red-500 mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              CasualMatch
            </span>
          </div>
          <Button
            onClick={() => setShowSignup(true)}
            className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold px-6"
          >
            Entrar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Conexões{" "}
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Sem Limites
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A rede social adulta para encontros reais, intensos e sem filtros.
              <br />
              <span className="text-red-400">Liberdade, prazer e discrição total.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => setShowSignup(true)}
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-500/30"
              >
                <Flame className="w-5 h-5 mr-2" />
                Entre Agora e Descubra
              </Button>
              <p className="text-gray-400 text-sm">
                Apenas <span className="text-red-400 font-bold">R$ 19,90</span> • Acesso vitalício
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <div className="bg-red-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Perfis Reais</h3>
              <p className="text-gray-400">
                Pessoas de mente aberta procurando conexões intensas e sem julgamentos.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <div className="bg-red-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chat Privado</h3>
              <p className="text-gray-400">
                Converse, compartilhe fotos e vídeos com total privacidade e segurança.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <div className="bg-red-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Discreto</h3>
              <p className="text-gray-400">
                Seus dados protegidos com criptografia. O que acontece aqui, fica aqui.
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <span className="text-gray-300">
                <span className="text-red-400 font-bold">+2.847</span> pessoas online agora
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-950/30 to-pink-950/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Aqui, o prazer é{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              sem filtros
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Crie seu perfil e libere o acesso completo em segundos.
          </p>
          <Button
            onClick={() => setShowSignup(true)}
            className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold text-lg px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-500/30"
          >
            Começar Agora por R$ 19,90
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-red-900/20">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          <p className="mb-2">
            <Lock className="w-4 h-4 inline mr-1" />
            Plataforma segura e criptografada • Conteúdo exclusivo +18
          </p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <Link href="/terms" className="hover:text-red-400 transition-colors">
              Termos de Uso
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-red-400 transition-colors">
              Política de Privacidade
            </Link>
          </div>
          <p>© 2025 CasualMatch. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
