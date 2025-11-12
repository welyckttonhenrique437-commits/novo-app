"use client";

import { Flame, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950/10 to-black">
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-red-900/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Flame className="w-7 h-7 text-red-500 mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              CasualMatch
            </span>
          </div>
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Política de Privacidade
            </h1>
            <p className="text-gray-400 mb-8">Última atualização: Janeiro de 2025</p>

            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-3">1. Informações que Coletamos</h2>
                <p className="mb-2">Coletamos as seguintes informações quando você se cadastra:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Cidade e estado</li>
                  <li>Data de nascimento (para verificação de idade)</li>
                  <li>Senha criptografada</li>
                  <li>Informações de pagamento (processadas por terceiros)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">2. Como Usamos Suas Informações</h2>
                <p className="mb-2">Usamos suas informações para:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Criar e gerenciar sua conta</li>
                  <li>Processar pagamentos e transações</li>
                  <li>Personalizar sua experiência na plataforma</li>
                  <li>Enviar notificações e atualizações importantes</li>
                  <li>Melhorar nossos serviços e funcionalidades</li>
                  <li>Prevenir fraudes e garantir segurança</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">3. Compartilhamento de Informações</h2>
                <p className="mb-2">
                  Não vendemos suas informações pessoais. Podemos compartilhar dados apenas:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Com processadores de pagamento (Kiwify) para transações</li>
                  <li>Com autoridades legais quando exigido por lei</li>
                  <li>Com provedores de serviços que nos ajudam a operar a plataforma</li>
                  <li>Em caso de fusão, aquisição ou venda de ativos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">4. Segurança dos Dados</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Criptografia SSL/TLS para transmissão de dados</li>
                  <li>Senhas criptografadas com hash seguro</li>
                  <li>Acesso restrito a dados pessoais</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares e seguros</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">5. Seus Direitos (LGPD)</h2>
                <p className="mb-2">De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
                  <li>Solicitar portabilidade dos dados</li>
                  <li>Revogar consentimento a qualquer momento</li>
                  <li>Opor-se ao tratamento de dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">6. Cookies e Tecnologias Similares</h2>
                <p>
                  Usamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma 
                  e personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">7. Retenção de Dados</h2>
                <p>
                  Mantemos suas informações pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. 
                  Você pode solicitar a exclusão de sua conta a qualquer momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">8. Conteúdo Adulto</h2>
                <p>
                  Nossa plataforma permite conteúdo adulto consensual entre maiores de 18 anos. Todo conteúdo é de 
                  responsabilidade dos usuários que o publicam. Monitoramos e removemos conteúdo ilegal ou que viole 
                  nossos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">9. Menores de Idade</h2>
                <p>
                  Nossa plataforma é exclusiva para maiores de 18 anos. Não coletamos intencionalmente informações de 
                  menores. Se identificarmos um usuário menor de idade, sua conta será imediatamente suspensa e os dados 
                  deletados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">10. Alterações nesta Política</h2>
                <p>
                  Podemos atualizar esta política periodicamente. Notificaremos você sobre mudanças significativas por 
                  e-mail ou através de aviso na plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">11. Contato</h2>
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
                </p>
                <ul className="list-none space-y-1 ml-4 mt-2">
                  <li><strong>E-mail:</strong> privacidade@casualmatch.com.br</li>
                  <li><strong>DPO:</strong> dpo@casualmatch.com.br</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
