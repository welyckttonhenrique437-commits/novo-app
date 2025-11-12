"use client";

import { Flame, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
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
              Termos de Uso
            </h1>
            <p className="text-gray-400 mb-8">Última atualização: Janeiro de 2025</p>

            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-3">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar a plataforma CasualMatch, você concorda com estes Termos de Uso e nossa Política de Privacidade. 
                  Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">2. Elegibilidade</h2>
                <p className="mb-2">Para usar a CasualMatch, você deve:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ter no mínimo 18 anos de idade</li>
                  <li>Ter capacidade legal para aceitar estes termos</li>
                  <li>Não estar proibido de usar nossos serviços por qualquer lei aplicável</li>
                  <li>Fornecer informações verdadeiras e precisas durante o cadastro</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">3. Conteúdo Proibido</h2>
                <p className="mb-2">É estritamente proibido publicar, compartilhar ou transmitir:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Conteúdo envolvendo menores de idade</li>
                  <li>Conteúdo não consensual ou obtido sem permissão</li>
                  <li>Conteúdo violento, ilegal ou que incite violência</li>
                  <li>Discurso de ódio, discriminação ou assédio</li>
                  <li>Spam, fraudes ou esquemas de pirâmide</li>
                  <li>Informações pessoais de terceiros sem consentimento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">4. Conduta do Usuário</h2>
                <p className="mb-2">Você concorda em:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Tratar outros usuários com respeito</li>
                  <li>Não se passar por outra pessoa ou entidade</li>
                  <li>Não usar a plataforma para fins comerciais não autorizados</li>
                  <li>Não tentar acessar contas de outros usuários</li>
                  <li>Respeitar a privacidade e os limites de outros usuários</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">5. Pagamento e Reembolso</h2>
                <p>
                  O acesso à plataforma requer um pagamento único de R$ 19,90. Este pagamento é processado através de nossa 
                  plataforma de pagamento segura (Kiwify). Reembolsos podem ser solicitados dentro de 7 dias da compra, 
                  sujeitos à análise e aprovação.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">6. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo da plataforma CasualMatch, incluindo design, código, logotipos e textos, é propriedade 
                  exclusiva da CasualMatch e está protegido por leis de direitos autorais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">7. Suspensão e Encerramento</h2>
                <p>
                  Reservamo-nos o direito de suspender ou encerrar sua conta a qualquer momento, sem aviso prévio, 
                  se você violar estes termos ou se envolver em atividades prejudiciais à plataforma ou outros usuários.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">8. Limitação de Responsabilidade</h2>
                <p>
                  A CasualMatch não se responsabiliza por encontros, interações ou relacionamentos que ocorram fora da plataforma. 
                  Você é o único responsável por suas ações e decisões ao usar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">9. Modificações dos Termos</h2>
                <p>
                  Podemos modificar estes termos a qualquer momento. Continuando a usar a plataforma após as modificações, 
                  você concorda com os novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">10. Contato</h2>
                <p>
                  Para dúvidas sobre estes termos, entre em contato através do e-mail: contato@casualmatch.com.br
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
