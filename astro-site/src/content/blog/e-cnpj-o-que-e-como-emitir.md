---
title: "e-CNPJ: o que é, para que serve e como emitir o certificado digital da sua empresa"
cardTitle: "e-CNPJ: o que é e como emitir passo a passo"
description: "Entenda o que é o e-CNPJ, quais obrigações da empresa exigem o certificado, a diferença entre A1 e A3, documentos necessários e como emitir por videoconferência com a AllCert."
pubDate: 2026-09-15
category: "Pessoa Jurídica"
tags: ["e-CNPJ", "Pessoa Jurídica", "NF-e", "e-CAC", "eSocial"]
keywords:
  - "e-cnpj"
  - "certificado digital e-cnpj"
  - "como emitir e-cnpj"
  - "e-cnpj a1 ou a3"
  - "certificado digital para empresa"
image: "/images/blog-e-cnpj.jpg"
imageAlt: "Empresário usando certificado digital e-CNPJ no computador"
featured: true
related:
  - "diferenca-certificado-a1-a3"
  - "certificado-digital-mei-precisa-ou-nao"
  - "documentos-necessarios-certificado-digital-videoconferencia"
faq:
  - q: "O que é o e-CNPJ?"
    a: "O e-CNPJ é o certificado digital ICP-Brasil emitido em nome de uma pessoa jurídica. Ele identifica a empresa em sistemas de governo e permite assinar documentos eletrônicos em nome dela, com a mesma validade jurídica de uma assinatura do representante legal em papel."
  - q: "Qual a diferença entre e-CNPJ e e-CPF?"
    a: "O e-CPF identifica uma pessoa física e o e-CNPJ identifica a empresa. Muitas obrigações empresariais aceitam os dois, desde que o titular do e-CPF seja o representante legal ou tenha procuração eletrônica. Já a emissão de NF-e e a maioria dos acessos ao e-CAC em nome da empresa pedem o e-CNPJ."
  - q: "O e-CNPJ A1 pode ser usado em mais de um computador?"
    a: "Sim. O e-CNPJ A1 é um arquivo digital instalado no computador e pode ser instalado em mais de uma máquina da empresa, desde que sob responsabilidade do titular e com a senha de importação. Por ser arquivo, ele não funciona em celular — para uso no smartphone existe o certificado em nuvem."
  - q: "Quem assina o pedido do e-CNPJ?"
    a: "O representante legal indicado no contrato social, estatuto ou requerimento de empresário. É ele quem passa pela validação de identidade. Quando a empresa tem administradores em conjunto, qualquer um deles pode figurar como titular, desde que o ato constitutivo permita."
  - q: "Quanto tempo leva para emitir o e-CNPJ?"
    a: "Com a documentação em ordem, a validação por videoconferência leva de 10 a 20 minutos e o certificado é emitido no mesmo dia. Na AllCert, a conferência prévia dos documentos é feita antes do agendamento justamente para evitar retrabalho."
---

Toda empresa que emite nota fiscal eletrônica, envia informações ao eSocial ou acessa o e-CAC em nome próprio cedo ou tarde esbarra no e-CNPJ. Este guia explica o que ele é, quando é obrigatório, como escolher entre A1 e A3 e o que preparar para emitir sem atraso.

## O que é o e-CNPJ

O **e-CNPJ** é o certificado digital ICP-Brasil emitido em nome de uma pessoa jurídica. Tecnicamente, é um arquivo (ou uma chave em mídia criptográfica) que contém o CNPJ da empresa, o nome do representante legal e uma chave pública, tudo assinado por uma Autoridade Certificadora credenciada pelo ITI.

Na prática, ele faz duas coisas:

1. **Prova que a empresa é quem diz ser** diante de um sistema — a Receita Federal, a SEFAZ, a Caixa.
2. **Assina documentos em nome da empresa**, com valor jurídico equiparado à assinatura manuscrita do representante legal (MP 2.200-2/2001).

O titular do e-CNPJ é sempre a empresa, mas a responsabilidade pelo uso é do representante legal que passou pela validação de identidade.

## Para que serve o e-CNPJ na prática

As situações mais comuns no dia a dia de quem tem empresa em Belo Horizonte e no restante do país:

- **Emissão de NF-e e NFC-e** nas SEFAZ estaduais;
- **Emissão de NFS-e** em prefeituras — incluindo o sistema da Prefeitura de Belo Horizonte;
- **Acesso ao e-CAC da Receita Federal** para consultar situação fiscal, parcelamentos, DCTFWeb e caixa postal;
- **eSocial e EFD-Reinf**, inclusive para empresas sem empregados que precisam declarar ausência de movimento;
- **Conectividade Social / FGTS Digital**, para recolhimento e movimentação de contas vinculadas;
- **Assinatura de contratos e distratos** com clientes, fornecedores e bancos;
- **Participação em licitações e portais de compras** públicas;
- **Procurações eletrônicas** concedendo acesso ao contador.

## e-CNPJ é obrigatório?

Não existe uma regra única que obrigue toda empresa. A obrigatoriedade nasce das operações que você realiza:

| Situação | e-CNPJ é exigido? |
| --- | --- |
| Emitir NF-e (mercadoria) | Sim, na prática sempre |
| Emitir NFS-e em BH | Sim, na maioria dos regimes |
| Enviar eSocial com empregados | Sim (ou e-CPF do responsável com procuração) |
| Empresa do Simples sem empregados e sem nota | Não necessariamente |
| Acessar o e-CAC em nome da empresa | Sim, ou procuração eletrônica para um e-CPF |
| MEI prestando serviço a empresas | Depende do município; veja o [guia do MEI](/blog/certificado-digital-mei-precisa-ou-nao) |

Vale a regra prática: se a empresa precisa **assinar algo** ou **entrar em algum sistema** em nome próprio, o e-CNPJ resolve.

## e-CNPJ A1 ou A3: qual escolher

Essa é a decisão com mais impacto na rotina. As duas opções entregam o mesmo valor jurídico; mudam a forma de guarda da chave privada.

### e-CNPJ A1

- Arquivo digital (.pfx / .p12) **instalado exclusivamente no computador**;
- Validade de **1 ano**;
- Pode ser instalado em mais de uma máquina da empresa e usado por sistemas que precisam assinar automaticamente — ERPs, emissores de NF-e, robôs de transmissão fiscal;
- Não depende de token, cartão, leitora nem driver;
- **Não funciona em celular**: por ser arquivo instalado em computador, o uso móvel exige o certificado em nuvem.

É a escolha natural de quem emite nota em volume ou usa sistema que precisa do certificado disponível o tempo todo.

### e-CNPJ A3

- Gravado em **token USB** ou **cartão com chip** (smartcard, que exige leitora);
- Validade de **1 a 3 anos** — menos renovações;
- A chave privada nunca sai da mídia: para assinar, o dispositivo precisa estar conectado e a senha PIN digitada;
- Exige instalação de drivers e da cadeia da AC no computador;
- Ideal quando o certificado é de uso pessoal do sócio, que quer controle físico de quem assina.

Comparamos as duas em detalhe no artigo [diferença entre certificado A1 e A3](/blog/diferenca-certificado-a1-a3). Se o objetivo é usar no celular, a resposta não é nenhum dos dois: é o [certificado em nuvem](/certificado-digital-em-nuvem).

## Documentos para emitir o e-CNPJ

Da empresa:

- **Ato constitutivo**: contrato social, requerimento de empresário (MEI/EI), estatuto ou ata — sempre na versão mais recente, com as alterações consolidadas e registro na Junta Comercial ou cartório;
- **Cartão CNPJ** ou comprovante de inscrição e situação cadastral emitido no site da Receita Federal;
- **Ata de eleição da diretoria** vigente, no caso de SA, cooperativas e associações.

Do representante legal:

- Documento de identidade original com foto e assinatura (RG, CNH, passaporte ou carteira de conselho de classe);
- CPF, quando não constar no documento de identidade;
- Comprovante de endereço recente.

Casos especiais — procurador, sócio estrangeiro, empresa em recuperação judicial, espólio — têm exigências adicionais. A lista completa está em [documentos necessários para emitir por videoconferência](/blog/documentos-necessarios-certificado-digital-videoconferencia).

## Como emitir o e-CNPJ passo a passo

1. **Defina o produto**: tipo (A1, A3 em token, A3 em cartão ou nuvem) e prazo de validade.
2. **Faça o pedido** pelo site ou pelo WhatsApp da AllCert.
3. **Envie os documentos** para conferência prévia. Conferimos antes do agendamento para que a validação não seja reprovada.
4. **Agende a validação**: por videoconferência ou presencialmente no nosso escritório, na R. São Paulo, 1071 - Sl 809 - Centro, Belo Horizonte - MG.
5. **Faça a validação de identidade** com os documentos originais em mãos.
6. **Emita e instale.** No A1, você define a senha de importação e o arquivo é instalado no computador. No A3, o certificado é gravado no token ou cartão. Na nuvem, você ativa o aplicativo com QR Code.
7. **Registre as senhas** em local seguro. Senha de revogação perdida não é recuperável.

## Cuidados depois da emissão

- **Faça backup do A1** logo após a instalação, exportando o arquivo com a senha. Se o computador for formatado sem backup, é preciso emitir novo certificado — não existe segunda via.
- **Não compartilhe a senha PIN** do token com a equipe inteira. Se várias pessoas precisam assinar, avalie certificados individuais com procuração eletrônica no e-CAC.
- **Anote a data de vencimento** e programe a renovação com 30 dias de antecedência. Veja o passo a passo em [renovação de certificado digital](/renovacao-certificado-digital).
- **Revogue imediatamente** em caso de perda, roubo ou desligamento do responsável — a revogação é o único mecanismo que invalida assinaturas futuras.

## Emita seu e-CNPJ com a AllCert

A AllCert é Autoridade de Registro vinculada à Soluti, dentro da ICP-Brasil, com escritório no Centro de Belo Horizonte e atendimento por videoconferência para todo o Brasil. Conferimos a documentação antes do agendamento, emitimos no mesmo dia e acompanhamos a instalação no seu emissor de notas.

> **AllCert Certificados Digitais**
> R. São Paulo, 1071 - Sl 809 - Centro, Belo Horizonte - MG, CEP 30170-131
> Telefones: (31) 97151-7322 e (31) 99524-6581 · CNPJ: 47.618.844/0001-64

Veja as opções e preços na página do [certificado e-CNPJ](/e-cnpj) ou chame no WhatsApp com o CNPJ em mãos que retornamos com a lista de documentos do seu caso.
