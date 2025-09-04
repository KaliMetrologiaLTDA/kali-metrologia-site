export default function PoliticaPrivacidade() {
  return (
    <section className="bg-[#EFF6FF] text-[#0F172A] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-[#1E40AF]">Política de Privacidade</h1>
          <p className="text-sm text-[#475569]">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>


        <hr className="border-[#CBD5E1]" />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Dados que coletamos</h2>
          <ul className="list-disc list-inside space-y-1 text-[#475569]">
            <li>Identificação e contato: nome, e-mail, telefone, empresa (quando informado).</li>
            <li>Conteúdo de mensagens enviadas via formulários do site.</li>
            <li>Dados técnicos de navegação: endereço IP, tipo de navegador, páginas acessadas e horários de acesso.</li>
            <li>Cookies e identificadores anônimos para melhorar a experiência no site.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Bases legais e finalidades</h2>
          <ul className="list-disc list-inside space-y-1 text-[#475569]">
            <li>Execução de contrato e procedimentos preliminares: atender solicitações e orçamentos.</li>
            <li>Legítimo interesse: aprimorar o site, prevenir fraudes e garantir segurança.</li>
            <li>Consentimento: envio de comunicações comerciais quando você optar por recebê-las.</li>
            <li>Cumprimento legal e regulatório: responder a determinações de autoridades quando necessário.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Compartilhamento de dados</h2>
          <p className="text-[#475569] leading-relaxed">
            Seus dados não são vendidos. Poderemos compartilhar somente quando necessário para
            prestação do serviço, cumprimento de obrigações legais ou mediante seu consentimento
            específico. Exemplos: provedores de hospedagem e ferramentas de envio de formulários
            e e-mails transacionais.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Retenção e segurança</h2>
          <p className="text-[#475569] leading-relaxed">
            Conservamos os dados pelo tempo necessário ao atendimento das finalidades informadas ou
            conforme exigências legais. Empregamos medidas técnicas e administrativas razoáveis para
            proteger contra acesso não autorizado, uso indevido, alteração e perda.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Seus direitos</h2>
          <p className="text-[#475569] leading-relaxed">
            Segundo a LGPD, você pode solicitar: confirmação e acesso; correção; anonimização,
            bloqueio ou eliminação; portabilidade; informação sobre compartilhamentos; revogação de
            consentimento; e manifestação de oposição quando cabível.
          </p>
          <p className="text-[#475569] leading-relaxed">
            Para exercer seus direitos, entre em contato pelo e-mail{" "}
            <a href="mailto:contato@kalimetrologia.com.br" className="text-[#2563EB] underline">
              contato@kalimetrologia.com.br
            </a>.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Cookies</h2>
          <p className="text-[#475569] leading-relaxed">
            Utilizamos cookies para lembrar preferências e entender a interação com o site.
            Você pode gerenciar cookies nas configurações do seu navegador. Ao continuar navegando,
            você concorda com o uso de cookies conforme esta política.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Formulários e comunicação</h2>
          <p className="text-[#475569] leading-relaxed">
            As informações enviadas pelos formulários do site são utilizadas para responder suas
            solicitações. Podemos enviar confirmações e follow-ups por e-mail ou telefone, sempre
            relacionados ao seu contato ou orçamento. Você pode solicitar a interrupção a qualquer momento.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Transferências internacionais</h2>
          <p className="text-[#475569] leading-relaxed">
            Alguns fornecedores de tecnologia que nos dão suporte podem armazenar dados fora do Brasil.
            Nesses casos, buscamos garantir níveis adequados de proteção de dados e cláusulas contratuais apropriadas.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Alterações desta política</h2>
          <p className="text-[#475569] leading-relaxed">
            Esta política pode ser atualizada para refletir mudanças legislativas ou operacionais.
            Publicaremos a nova versão neste endereço com a data de atualização.
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#1E40AF]">Contato</h2>
          <p className="text-[#475569] leading-relaxed">
            E-mail:{" "}
            <a href="mailto:contato@kalimetrologia.com.br" className="text-[#2563EB] underline">
              contato@kalimetrologia.com.br
            </a>
          </p>
          <p className="text-[#475569] leading-relaxed">
            Endereço: Rua São João, 221 E – Águas Claras, Salvador/BA
          </p>
          <p className="text-[#475569] leading-relaxed">
            Telefones: +55 71 3165-3747 | 3309-9282 | 98740-2708
          </p>
        </div>
      </div>
    </section>
  )
}
