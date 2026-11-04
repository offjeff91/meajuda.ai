/**
 * All user-facing copy in one place. Edit text here — components only
 * reference these constants.
 */

export const APP_COPY = {
  brand: 'Me Ajudaí',
  kicker: 'Assistente pessoal',
  tagline: 'Seu assistente, pras suas coisas e pras pessoas ao seu redor',
  intro:
    'Divide contas, organiza tarefas e lembra do que importa — pelo WhatsApp ou pelo app, numa frase. Casa, viagem, república, projeto em grupo: você escolhe o contexto, o assistente cuida do resto.',

  templates: {
    heading: 'Um assistente, vários contextos',
    body: 'Comece de um template pronto ou do zero — por baixo é sempre a mesma engine: despesas, tarefas, lembretes.',
    items: [
      { icon: '🏠', label: 'Casa', example: 'Divide aluguel, mercado e contas da casa com quem mora com você.' },
      { icon: '✈️', label: 'Viagem', example: 'Rateia hospedagem, passagem e gastos do grupo sem perder o fio da meada.' },
      { icon: '🎉', label: 'Evento', example: 'Organiza quem leva o quê e divide o custo da festa ou do churrasco.' },
      { icon: '👥', label: 'Projeto em grupo', example: 'Divide tarefas e custos de um projeto com outras pessoas, com prazo e responsável.' },
      { icon: '🧍', label: 'Só pra você', example: 'Organiza suas próprias contas, lembretes e metas, sem compartilhar com ninguém.' },
    ],
  },

  profiles: {
    heading: 'Também se adapta a quem você é',
    body: 'Além do contexto do grupo, o assistente ajusta o que mostra primeiro de acordo com o seu dia a dia.',
    items: [
      { icon: '🧾', label: 'MEI', example: 'Checklist mensal do ciclo contábil: DAS, nota fiscal e declaração, sem esquecer prazo.' },
      { icon: '💼', label: 'CLT / Autônomo', example: 'Acompanha renda variável e contas fixas no mesmo lugar, sem planilha.' },
      { icon: '🏛️', label: 'Bolsa Família', example: 'Avisa a data de pagamento pelo seu NIS e lembretes cívicos, de graça, sem precisar de conta.' },
      { icon: '✨', label: 'Outro', example: 'O essencial de dividir contas e organizar tarefas, do seu jeito.' },
    ],
  },

  features: {
    heading: 'Tudo o que ele cuida pra você',
    items: [
      {
        icon: '🤝',
        title: 'Despesas compartilhadas',
        body: 'Divide contas com quem estiver nessa com você — casa, viagem, rolê — com saldo sempre atualizado, sem conta de cabeça.',
      },
      {
        icon: '✅',
        title: 'Tarefas e listas',
        body: 'Lembra quem faz o quê, com lembrete certo na hora certa, sem depender de ninguém ficar cobrando.',
      },
      {
        icon: '💰',
        title: 'Orçamento e contas fixas',
        body: 'Acompanha o que já foi gasto e nenhuma conta recorrente passa batido.',
      },
      {
        icon: '📋',
        title: 'Ciclo contábil pra MEI',
        body: 'Checklist mensal pra quem tem CNPJ não perder prazo de DAS, nota fiscal e declaração.',
      },
      {
        icon: '🎙️',
        title: 'Fala que a gente entende',
        body: 'Escreve "mercado 85,40" ou "uber pro trabalho 23,90" numa frase só — a IA cria a despesa ou a tarefa pra você.',
      },
      {
        icon: '💬',
        title: 'Direto no WhatsApp',
        body: 'Sem precisar abrir outro app: manda mensagem pro número do assistente e pronto.',
      },
      {
        icon: '🔔',
        title: 'Lembretes cívicos, de graça',
        body: 'Bolsa Família, prazo de imposto do MEI, datas de eleição — sem login, sem custar nada, pra qualquer pessoa.',
      },
      {
        icon: '📱',
        title: 'Leve como um app',
        body: 'Instala na tela de início do celular, funciona offline e avisa quando alguma coisa muda no seu espaço.',
      },
    ],
  },

  cta: {
    heading: 'Quer testar?',
    body: 'Ainda estamos em fase inicial, com acesso por convite — manda um oi que a gente te inclui.',
    button: 'Mandar oi',
  },

  faq: {
    heading: 'Perguntas rápidas',
    items: [
      {
        question: 'Preciso pagar pra usar?',
        answer:
          'O essencial — dividir contas, organizar tarefas e os lembretes cívicos gratuitos — não custa nada. O plano pago é só pra quem precisa coordenar um grupo de 3 ou mais pessoas ao mesmo tempo.',
      },
      {
        question: 'Preciso instalar algo?',
        answer:
          'Não. Funciona direto no navegador do celular ou computador, e também pelo WhatsApp. Se quiser, dá pra instalar como um appzinho na tela inicial — mas é opcional.',
      },
      {
        question: 'Meus dados ficam seguros?',
        answer:
          'Sim. Seus dados são só do seu espaço — ninguém de fora vê, a gente não vende dado de ninguém, e você pode pedir exportação ou exclusão da conta quando quiser.',
      },
    ],
  },

  footer: 'Feito pra quem divide a vida com gente — em casa, numa viagem, num grupo ou sozinho mesmo.',
} as const;
