import React from 'react';
import { 
  Package, 
  DollarSign, 
  ShoppingCart, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  BarChart3,
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';

const CHECKOUT_URL = "https://pay.cakto.com.br/y8mkzes_790947";

const FeatureCard = ({ icon: Icon, title, description, items }: { icon: any, title: string, description: string, items: string[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
          <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">R</div>
            <span className="text-2xl font-bold tracking-tight">R2B</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#sistemas" className="hover:text-indigo-600 transition-colors">Sistemas</a>
            <a href="#integracao" className="hover:text-indigo-600 transition-colors">Integração</a>
            <a href="#precos" className="hover:text-indigo-600 transition-colors">Preços</a>
          </nav>
          <a 
            href={CHECKOUT_URL}
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Começar Agora
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Ecossistema Completo de Gestão
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Tudo o que seu negócio precisa <br />
              <span className="text-indigo-600">em um só lugar.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Controle de estoque, financeiro e PDV integrados nativamente. 
              Aumente sua produtividade e tenha visão total da sua empresa com a R2B.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={CHECKOUT_URL}
                className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200"
              >
                Assinar por R$ 97/mês <ArrowRight size={20} />
              </a>
              <a 
                href="#sistemas"
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all"
              >
                Ver Sistemas
              </a>
            </div>
          </motion.div>

          {/* Dashboard Preview Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-20 relative"
          >
            <div className="bg-slate-900 rounded-3xl p-4 shadow-2xl overflow-hidden aspect-video max-w-5xl mx-auto border-4 border-slate-800">
              <div className="w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 flex-col gap-4">
                <BarChart3 size={64} className="opacity-20" />
                <p className="font-mono text-sm uppercase tracking-widest opacity-40">Interface Unificada R2B</p>
              </div>
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-6 -left-6 md:left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <Zap size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-bold uppercase">Sincronização</p>
                  <p className="text-sm font-bold">Tempo Real</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-bold uppercase">Segurança</p>
                  <p className="text-sm font-bold">Dados Criptografados</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systems Section */}
      <section id="sistemas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Três Sistemas, Uma Só Solução</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Desenvolvemos ferramentas poderosas que funcionam de forma independente, mas brilham quando usadas em conjunto.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Package}
              title="Controle de Estoque"
              description="Gestão completa de entradas, saídas e movimentações com inteligência."
              items={[
                "Gestão de múltiplos depósitos",
                "Alertas de estoque baixo",
                "Curva ABC de produtos",
                "Relatórios de inventário",
                "Entrada via XML de NF-e"
              ]}
            />
            <FeatureCard 
              icon={DollarSign}
              title="Sistema Financeiro"
              description="Controle total do seu fluxo de caixa e saúde financeira da empresa."
              items={[
                "Contas a pagar e receber",
                "Fluxo de caixa projetado",
                "Conciliação bancária",
                "DRE Gerencial automático",
                "Emissão de boletos e notas"
              ]}
            />
            <FeatureCard 
              icon={ShoppingCart}
              title="Sistema PDV"
              description="Vendas rápidas e intuitivas para o seu balcão ou frente de loja."
              items={[
                "Vendas em poucos cliques",
                "Integração com balanças",
                "Múltiplas formas de pagamento",
                "Fechamento de caixa cego",
                "Funciona offline e online"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integracao" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                A mágica acontece na <br />
                <span className="text-indigo-600">integração total.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Ecossistema Unificado</h4>
                    <p className="text-slate-600">Ao realizar uma venda no PDV, o estoque é baixado automaticamente e o financeiro é atualizado instantaneamente.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Dados que Conversam</h4>
                    <p className="text-slate-600">Chega de planilhas paralelas. Seus dados financeiros refletem exatamente o que acontece na sua operação de estoque e vendas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
                    <p className="text-2xl font-bold text-indigo-600">100%</p>
                    <p className="text-xs font-bold uppercase text-slate-500">Integrado</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                    <p className="text-2xl font-bold text-emerald-600">0</p>
                    <p className="text-xs font-bold uppercase text-slate-500">Retrabalho</p>
                  </div>
                  <div className="col-span-2 p-6 bg-slate-900 rounded-2xl text-white">
                    <p className="text-sm opacity-60 mb-2">Status do Sistema</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <p className="text-lg font-mono">Sincronização Ativa</p>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Preço Simples e Transparente</h2>
          <p className="text-slate-600 mb-16 text-lg">Sem taxas escondidas, sem limites de usuários. Acesso total.</p>
          
          <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl border-2 border-indigo-600 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-8 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
              Plano Único
            </div>
            <h3 className="text-2xl font-bold mb-4">Acesso Completo R2B</h3>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-2xl font-bold text-slate-400">R$</span>
              <span className="text-7xl font-black text-slate-900">97</span>
              <span className="text-xl font-bold text-slate-400">/mês</span>
            </div>
            
            <ul className="text-left space-y-4 mb-10">
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Controle de Estoque Completo
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Sistema Financeiro Completo
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Sistema PDV Completo
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Integração Nativa entre Sistemas
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Suporte Especializado
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-emerald-500" />
                Atualizações Gratuitas
              </li>
            </ul>
            
            <a 
              href={CHECKOUT_URL}
              className="block w-full bg-indigo-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
            >
              Assinar Agora
            </a>
            <p className="mt-6 text-sm text-slate-500">Cancelamento fácil a qualquer momento.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Pronto para transformar sua gestão?</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já utilizam o ecossistema R2B para crescer com organização.
          </p>
          <a 
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-all"
          >
            Começar Agora <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">R</div>
            <span className="text-xl font-bold tracking-tight">R2B</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} R2B - Gestão Inteligente. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-indigo-600">Termos</a>
            <a href="#" className="hover:text-indigo-600">Privacidade</a>
            <a href="https://r2b.ia.br" className="hover:text-indigo-600">r2b.ia.br</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
